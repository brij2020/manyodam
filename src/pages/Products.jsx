import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListingPage from "../Components/ListingPage";
import Drawer from "../Components/Drawer";
import { ProductsList } from "../Store/Services/ProductsList";
const Products = (props) => {
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
   const pageInfo = {
    pageTableTitle: "Products Listing",
    pageTableDec: "all products listed",
    pageName: "Products",
    RbuttonName: "Add Products",
    collectionName: "products"
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductsList({collectiontype: pageInfo.collectionName}));
  }, []);
  let head = ["Product Image","Product Name", "MRP","Sell Price","Action"];
  let productList = [];
  let actions = []
  productList = products.length > 0 && products.map(pro => {
    let cellData = [pro?.pic_url,pro?.productname,pro?.mrp,pro?.sellprice,[pro._id]]
    return Object.assign({},pro,{"cellData": cellData})
  }); 

 

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
export default Products;
