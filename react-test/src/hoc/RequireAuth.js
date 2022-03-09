import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({children, auth}) => {
    const location = useLocation();
    if (!auth) {
        return <Navigate to="/login" state={{from: location}} />
    } 
    return children;
}

export { RequireAuth };