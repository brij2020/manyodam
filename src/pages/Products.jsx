import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListingPage from "../Components/ListingPage";
import Drawer from "../Components/Drawer";
import { ProductsList } from "../Store/Services/ProductsList";
const Products = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { products, loading }= useSelector(store => store?.productsListReducer)
  console.log("product",products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductsList());
  }, []);
  let head = ["Product Image","Product Name", "MRP","Sell Price","Action"];
  let productList = [];
  productList = products.length > 0 && products.map(pro => {
    let cellData = [pro?.pic_url,pro?.productname,pro?.mrp,pro?.sellprice,""]
    return Object.assign({},pro,{"cellData": cellData})
  }); 

  return (
    <>
      <ListingPage  
        productTableData={ productList }
        tblHead={ head }
        list={ products }
      />

    </>
  );
};
export default Products;
