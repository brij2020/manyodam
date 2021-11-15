import React, { useRef, useState } from "react";
import * as yup from "yup";

export const schema = yup.object().shape({
  productname: yup
  .string().required("please enter product name."),
  mrp: yup
  .number()
  .integer()
  .nullable(true)
  .required("please enter product mrp."),
  sellprice: yup
  .number()
  .integer()
  .nullable(true)
  .required("please enter product sell price.")
  .lessThan(yup.ref('mrp'), "please enter valid sellprice"),
  pdescription: yup
  .string()
  .min(5)
});

const FormInput = React.forwardRef((props, ref) => {
  const imgRef = useRef(null);
  const { errorProps, setImage } = props;
  const handleImage = () => {
    imgRef.current.click();
  };
  const handleFileImage = e => {
    setImage(e.target.files[0])
  }
  
  return (
    <>
      <div class="form-group">
        <label for="exampleInputName1">Product Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputName1"
          placeholder="product name"
          name="productname"
          {...ref("productname", { required: true, message:"product nname", min:3 })}
        />
         { errorProps && errorProps?.productname  ? ( <span className="validationError">{ errorProps?.productname?.message }</span>) :(null) }
      </div>
      <div class="form-group">
        <label for="exampleInputEmail3">Mrp.</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail3"
          placeholder="MRP"
          name="mrp"
          {...ref("mrp")}

        />
         { errorProps && errorProps?.mrp  ? ( <span className="validationError">{ errorProps?.mrp?.message }</span>) :(null) }

      </div>
      <div class="form-group">
        <label for="exampleInputPassword4">Sell Price</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword4"
          placeholder="sell price"
          name="sellprice"
          { ...ref("sellprice")}
        />
         { errorProps && errorProps?.sellprice  ? ( <span className="validationError">{ errorProps?.sellprice?.message }</span>) :(null) }

      </div>
      <div class="form-group">
        <label for="exampleTextarea1">Product Description</label>
        <textarea
          class="form-control"
          id="exampleTextarea1"
          rows="4"
          name="pdescription"
          placeholder="product description"
          {...ref("pdescription")}
        ></textarea>
         { errorProps && errorProps?.pdescription  ? ( <span className="validationError">{ errorProps?.pdescription?.message }</span>) :(null) }

      </div>
      <div class="form-group">
        <label>Product Image</label>
        <input
          type="file"
          name="img[]"
          ref={imgRef}
          class="file-upload-default"
          name="pimage"
          onChange = { handleFileImage }
          // {...ref("pimage")}
        />
        <div class="input-group col-xs-12">
          <input
            type="text"
            class="form-control file-upload-info"
            disabled
            placeholder="Upload Image"
          />
          <span class="input-group-append">
            <button
              class="file-upload-browse btn btn-primary"
              onClick={handleImage}
              type="button"
            >
              Upload
            </button>
          </span>
        </div>
      </div>
    </>
  );
});
export default FormInput;
