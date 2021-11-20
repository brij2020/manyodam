import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListingPage from "../Components/ListingPage";
import Drawer from "../Components/Drawer";
import { ProductsList } from "../Store/Services/ProductsList";

const User = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { products=[], loading }= useSelector(store => store?.productsListReducer)
  const drawerOpen = {
    drawerAction: "",
    data:{},
    pageName: "",
    title: "",
  }
  const drawerClose = {
    drawerAction: "",
    data:{},
    pageName: "",
    title: "",
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductsList({collectiontype: "users"}));
  }, []);
  let head = ["User Picture","Full Name","Email", "Mobile Number","type","Action"];
  let productList = [];
  let actions = [];
  console.log("products",products)
  productList = products.length > 0 && products.map(pro => {
    let cellData = ["test",pro?.name,pro?.email,pro?.mobileNmb,pro?.type,[pro._id]]
    return Object.assign({},pro,{"cellData": cellData})
  }); 

  const pageInfo = {
    pageTableTitle: "User Listing",
    pageTableDec: "all users listed",
    pageName: "User",
    RbuttonName: "Add user",
    collectionName: "users"
  }

  return (
    <>
      <ListingPage  
        productTableData={ productList }
        tblHead={ head }
        list={ products }
        drawerClose
        drawerOpen
        {...pageInfo }
      />

    </>
  );
};
export default User;
