import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';

export interface Props {
    children: JSX.Element;
}

export default function ProtectedRoute({ children }: Props) {
    const user = useAppSelector((x) => x.user);

    if (!user.user) return <Navigate to={'/'} replace />;

    return children;
}
