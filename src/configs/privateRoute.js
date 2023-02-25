import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";

const PrivateRoute = () =>{
  return  localStorage.getItem('token') ? <Layout /> : <Navigate to="/" />;
}

export default PrivateRoute;