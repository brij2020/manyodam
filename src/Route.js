import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Layout/Main";
import Loader from "./Components/Loading";
import { useSelector } from "react-redux";
import useAuth from "./hooks/Auth";
import ToastNote from "./Components/ToastNotification";

const Header = React.lazy(() => import("./Layout/Header"));
const Login = React.lazy(() => import("./pages/Login"));
const ProtectedRoute = React.lazy(() => import("./Auth/Protected"));
const Register = React.lazy(() => import("./pages/Register"));
const ListingPage = React.lazy(() => import("./Components/ListingPage"));
const Setting = React.lazy(() => import("./Layout/Setting"));
const SettingSideBar = React.lazy(() => import("./Layout/SettingSideBar"));
const Sidebar = React.lazy(() => import("./Layout/SideBar"));
const Products = React.lazy(() => import("./pages/Products"))
const InternalRoute = (props) => {
  const { isAuthenticated } = useAuth();
  console.log("password", isAuthenticated);
  return (
    <div class="container-scroller">
      <BrowserRouter>
        {isAuthenticated ? (
          <>
            <Suspense fallback={<Loader type="spokes" color="red" />}>
            
              <Header />
            </Suspense>
            <div class="container-fluid page-body-wrapper">
              <Suspense fallback={<Loader type="spokes" color="red" />}>
                <Setting />
                <SettingSideBar />
                <Sidebar />
              </Suspense>

              <Suspense fallback={<Loader type="spokes" color="red" />}>
                <Routes>
                  <Route path="/lists" element={<ProtectedRoute />} >
                    <Route path="/lists" element={ <ListingPage />} />
                  </Route>
                  <Route path="/products" element={<ProtectedRoute />} >
                    <Route path="/products" element={ <Products />} />
                  </Route>



                  
                  <Route path="/" element={<ProtectedRoute />}>
                    <Route exact path="/" element={<Main />} />
                  </Route>
                </Routes>
              </Suspense>
            </div>
          </>
        ) : (
          <Suspense fallback={<Loader type="spokes" color="red" />}>
            <Routes>
            <Route path="/list" element= { <ListingPage /> } />
              <Route path="/admin/register" element={<Register />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="*" element={<Login />} />
            </Routes>
          </Suspense>
        )}

        <ToastNote />
      </BrowserRouter>
    </div>
  );
};
export default InternalRoute;
