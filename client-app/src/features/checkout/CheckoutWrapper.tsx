import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import agent from '../../app/api/agent';
import { useAppDispatch } from '../../app/hooks';
import { setBasket } from '../basket/basketSlice';
import CheckoutPage from './CheckoutPage';

const stripePromise = loadStripe('pk_test_51IlDzaIn8T3pA4gGjSzkSDGzb2BjHXYUlWpKv4OgbuMMq9ZzjEfbqr4zuuUngnYKJGN42jhJCQEplSTcEYBdbhLG00MRD3efdH');

export default function CheckoutWrapper() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Payments.createPaymentIntent()
            .then((basket) => dispatch(setBasket(basket)))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [dispatch]);

    if (loading) return <div>Loading checkout...</div>;

    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    );
}
