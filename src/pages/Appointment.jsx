import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListingPage from "../Components/ListingPage";
import Drawer from "../Components/Drawer";
import { ProductsList } from "../Store/Services/ProductsList";
const Appointment = (props) => {
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
    dispatch(ProductsList({collectiontype: "appointments"}));
  }, []);
  let head = ["Full Name","Email", "Mobile Number","Scheduled","Problem","Message","Action"];
  let productList = [];
  let actions = [];
  console.log("products",products)
  productList = products.length > 0 && products.map(pro => {
    let cellData = [pro?.fullname,pro?.email,pro?.mobileNmb,pro?.schedule,pro?.disorder,pro?.msg,[pro._id]]
    return Object.assign({},pro,{"cellData": cellData})
  }); 

  const pageInfo = {
    pageTableTitle: "Appointment Listing",
    pageTableDec: "all appointment listed",
    pageName: "Appointment",
    RbuttonName: "Add appointment",
    collectionName: "appointments"


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
export default Appointment;
