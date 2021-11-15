import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ListingPage from "../Components/ListingPage";
import Drawer from "../Components/Drawer";
import { ProductsList } from "../Store/Services/ProductsList";
const Products = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductsList());
  }, []);
  return (
    <>
      <ListingPage />
    </>
  );
};
export default Products;
