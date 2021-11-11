import React,{ Suspense }from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Main from "./Layout/Main";
import LoadingContainer from "./Components/Loading";
const Login = React.lazy(() => import("./pages/Login"))
const ProtectedRoute = React.lazy(() => import ("./Auth/Protected"))
const Register = React.lazy(() => import("./pages/Register"))
const InternalRoute = (props) => {
  
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingContainer />}>
      <Routes>
        <Route path="/admin/register" element={<Register />} /> 
        <Route path="/admin/login" element={<Login />} />
          <Route exact path='/admin/login' element={<ProtectedRoute />}>
        </Route>
        {/* <Route path="/" element={<ProtectedRoute />} > */}
         <Route exact path="/" element={<Main />} />
        {/* </Route> */}
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default InternalRoute;
