import React,{ useEffect } from "react";
import { useDispatch } from "react-redux";
import ListingPage from "../Components/ListingPage"
import { ProductsList } from "../Store/Services/ProductsList"
const Products = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ProductsList())
    },[])   
    return (
        <ListingPage />
    )
}
export default Products;