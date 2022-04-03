import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography/Typography';
import Button from '@mui/material/Button/Button';
import MyTextInput from '../app/common/MyTextInput';
import ValidationErrors from './ValidationErrors';
import { useAppDispatch } from '../app/hooks';
import agent from '../app/api/agent';
import { toast } from 'react-toastify';
import history from '../app/historyApi';
import { setLoginOpen, setRegisterOpen } from '../features/dialog/dialogSlice';

export default function RegisterForm() {
    const dispatch = useAppDispatch();

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                error: null
            }}
            onSubmit={(values, { setErrors, setSubmitting }) => {
                const { error, ...rest } = values;
                agent.Account.register(rest)
                    .then(() => {
                        toast.success('Registration successful - you can now login');
                        dispatch(setRegisterOpen(false));
                        dispatch(setLoginOpen(true));
                    })
                    .catch((error) => setErrors({ error }));
                setSubmitting(false);
            }}
            validationSchema={Yup.object({
                username: Yup.string().required(),
                email: Yup.string().required().email(),
                password: Yup.string().required()
            })}
        >
            {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                <Form onSubmit={handleSubmit} autoComplete="off" style={{ padding: '2rem' }}>
                    <Typography variant="h3" textAlign="center" sx={{ marginBottom: '1rem' }}>
                        Sign up
                    </Typography>
                    <MyTextInput name="username" placeholder="Username" />
                    <MyTextInput name="email" placeholder="Email" />
                    <MyTextInput name="password" placeholder="Password" type="password" />
                    <div style={{ marginTop: '1rem' }} />
                    <ErrorMessage name="error" render={() => <ValidationErrors errors={errors.error} />} />
                    <Button
                        sx={{
                            width: '100%',
                            marginTop: '1rem'
                        }}
                        variant="outlined"
                        disabled={!isValid || !dirty || isSubmitting}
                        type="submit"
                    >
                        Register
                    </Button>
                </Form>
            )}
        </Formik>
    );
}
