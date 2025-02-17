import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <Loading />
    }
    if(user) {
        return children;
    }
    else{
        return <Navigate state={location.pathname} to={'/login'} />
    }
};

export default PrivateRoute;