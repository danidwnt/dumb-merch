import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
        const isSignIn = true

        return (
            isSignIn ? <Outlet/> : <Navigate to="/" />
        )
}


export default PrivateRoute