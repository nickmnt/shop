import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { LoginDto, RegisterDto } from '../models/dto';
import { User } from '../models/user';
import history from '../historyApi';
import { Product } from '../models/product';
import { PaginatedResponse } from '../models/pagination';
import { Basket } from '../models/basket';

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
};

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const interceptors = axios.interceptors;

axios.interceptors.response.use(
    async (response) => {
        await sleep(1000);
        // const pagination = response.headers["pagination"];
        // if (pagination) {
        //   response.data = new PaginatedResult(
        //     response.data,
        //     JSON.parse(pagination)
        //   );
        //   return response as AxiosResponse<PaginatedResult<any>>;
        // }
        const pagination = response.headers['pagination'];
        if (pagination) {
            response.data = new PaginatedResponse(response.data, JSON.parse(pagination));
            return response;
        }
        return response;
    },
    (error: AxiosError) => {
        const { data, status, config } = error.response!;
        switch (status) {
            case 400:
                if (typeof data === 'string') {
                    toast.error(data);
                }
                // if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                //     history.push('/not-found');
                // }
                // if (data.errors) {
                //     const modalStateErrors = [];
                //     for (const key in data.errors) {
                //         if (data.errors[key]) {
                //             modalStateErrors.push(data.errors[key]);
                //         }
                //     }
                //     throw modalStateErrors.flat();
                // }
                break;
            case 401:
                toast.error('unauthorized');
                break;
            case 404:
                history.push('not-found');
                break;
            case 500:
                // store.commonStore.setServerError(data);
                // history.push("/server-error");
                toast.error('server-error');
                break;
        }
        return Promise.reject(error);
    }
);

const createFormData = (item: any) => {
    let formData = new FormData();
    for (const key in item) {
        formData.append(key, item[key]);
    }
    return formData;
};

const requests = {
    get: <T>(url: string, params?: URLSearchParams) => axios.get<T>(url, { params }).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
    postForm: (url: string, data: FormData) =>
        axios
            .post(url, data, {
                headers: { 'Content-type': 'multipart/form-data' }
            })
            .then(responseBody),
    putForm: (url: string, data: FormData) =>
        axios
            .put(url, data, {
                headers: { 'Content-type': 'multipart/form-data' }
            })
            .then(responseBody)
};

const Account = {
    login: (user: LoginDto) => requests.post<User>('/Account/login', user),
    currentUser: () => requests.get<User>('account/currentUser'),
    register: (values: RegisterDto) => requests.post('account/register', values),
    fetchAddress: () => requests.get<any>('account/savedAddress')
};

const Catalog = {
    list: (params: URLSearchParams) => requests.get<PaginatedResponse<Product>>('products', params),
    details: (id: number) => requests.get<Product>(`products/${id}`),
    fetchFilters: () => requests.get('products/filters')
};

const BasketRequests = {
    get: () => requests.get<Basket>('basket'),
    addItem: (productId: number, quantity = 1) => requests.post<Basket>(`basket?productId=${productId}&quantity=${quantity}`, {}),
    removeItem: (productId: number, quantity = 1) => requests.del(`basket?productId=${productId}&quantity=${quantity}`)
};

const Orders = {
    list: () => requests.get<any>('orders'),
    fetch: (id: number) => requests.get(`orders/${id}`),
    create: (values: any) => requests.post<any>('orders', values)
};

const Payments = {
    createPaymentIntent: () => requests.post('payments', {})
};

const Admin = {
    createProduct: (product: any) => requests.postForm('products', createFormData(product)),
    updateProduct: (product: any) => requests.putForm('products', createFormData(product)),
    deleteProduct: (id: number) => requests.del(`products/${id}`)
};

const agent = {
    Account,
    Catalog,
    BasketRequests,
    Orders,
    Payments,
    Admin
};

export default agent;
