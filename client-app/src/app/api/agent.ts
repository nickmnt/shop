import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { LoginDto, RegisterDto } from '../models/dto';
import { User } from '../models/user';
import history from '../historyApi';
import { Product } from '../models/product';
import { PaginatedResponse } from '../models/pagination';

axios.defaults.baseURL = 'http://localhost:5000/api/';

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
                if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                    history.push('/not-found');
                }
                if (data.errors) {
                    const modalStateErrors = [];
                    for (const key in data.errors) {
                        if (data.errors[key]) {
                            modalStateErrors.push(data.errors[key]);
                        }
                    }
                    throw modalStateErrors.flat();
                }
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

const requests = {
    get: <T>(url: string, params?: URLSearchParams) => axios.get<T>(url, { params }).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
};

const Account = {
    login: (user: LoginDto) => requests.post<User>('/Account/login', user),
    currentUser: () => requests.get<User>('account/currentUser'),
    register: (values: RegisterDto) => requests.post('account/register', values)
};

const Catalog = {
    list: (params: URLSearchParams) => requests.get<PaginatedResponse<Product>>('products', params),
    fetchFilters: () => requests.get('products/filters')
};

const agent = {
    Account,
    Catalog
};

export default agent;
