import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Layout/Main";
import Loader from "./Components/Loading";
import { useSelector } from "react-redux";
import ToastNote from "./Components/ToastNotification"
const Login = React.lazy(() => import("./pages/Login"));
const ProtectedRoute = React.lazy(() => import("./Auth/Protected"));
const Register = React.lazy(() => import("./pages/Register"));
const InternalRoute = (props) => {
  const { loading } = useSelector((store) => store.userLogin)
console.log("isLoading",loading)
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader type="spokes" color="red"/>} >
        { loading ? <Loader type="spokes" color="red" /> : null }

        <Routes>
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/login" element={<Login />} />
          <Route exact path="/admin/login" element={<ProtectedRoute />}></Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route exact path="/" element={<Main />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastNote />
    </BrowserRouter>
  );
};
export default InternalRoute;
