import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ type="spokes", color="red",isLoading=false }) =>  {  
 const ele = isLoading ? <ReactLoading type={type} color={color}  className="loading" /> : null
 return ele;
}
   
export default Loader