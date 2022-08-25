import { InputBaseComponentProps } from '@mui/material';
import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';

interface Props extends InputBaseComponentProps {}

export const StripeInput = forwardRef(function StripeInput({ component: Component, ...props }: Props, ref: Ref<unknown>) {
    const elementRef = useRef<any>();

    useImperativeHandle(ref, () => ({
        focus: () => elementRef.current.focus
    }));

    return (
        <Component
            options={{
                style: {
                    base: {
                        color: '#FFF',
                        ':-webkit-autofill': {
                            color: '#fce883'
                        },
                        '::placeholder': {
                            color: '#9e9e9e'
                        }
                    }
                }
            }}
            onReady={(element: any) => (elementRef.current = element)}
            {...props}
        />
    );
});
