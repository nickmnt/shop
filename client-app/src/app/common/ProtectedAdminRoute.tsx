import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';

export interface Props {
    children: JSX.Element;
}

export default function ProtectedAdminRoute({ children }: Props) {
    const user = useAppSelector((x) => x.user);

    if (!user.user || !user.user.roles || !user.user.roles.includes('Admin')) return <Navigate to={'/'} replace />;

    return children;
}
