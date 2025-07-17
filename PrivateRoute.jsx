import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./src/firebase"

const PrivateRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    console.log(user);

    if (loading) return <div>Loading...</div>; // або спінер

    return user ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
