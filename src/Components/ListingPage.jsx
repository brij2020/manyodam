import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Drawer from "../Components/Drawer";
import DrawerFooter from "./DrawerFooter";
import FormInput,{ schema} from "./ProductFormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AddProduct } from "../Store/Services/ProductsList";
import { pushNewProduct } from "../Store/slices/Products.slice.js"
import { uploadImage } from "../Store/Services/ImageUpload"
import Loader from "../Components/LoadingProp";
import { useDispatch,useSelector } from "react-redux";

const ListingPage = (props) => {
  const dispatch = useDispatch();
  const { productTableData,tblHead, list} = props;
  const config = {
    mainHead: "User List",
    tblHead: ["User", "First Name", "Progress", "Amount", "Deadline"],
    cellData: [
      "../../images/faces/face1.jpg",
      "Herman Beck",
      "778.9",
      "test",
      "new",
    ],
  };
    
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [image,setImageForm] = useState(null);
  const [preUrl, setPreview ] = useState(null);
  const { loading } = useSelector((store) => store.userLogin);
  const [isOpen, setIsOpen] = useState(false);
  const setPriviewImageUrl = (file) => {
  const objectUrl = URL.createObjectURL(file)
  setPreview(objectUrl)
  }
  const onSubmitHandler = (data) => {
   dispatch(AddProduct(data, dispatch))
   .then(response => {
    console.log("response",preUrl)
    const { payload:{ data:{ _id }}} = response
    const imageForm = new FormData();
    imageForm.append("image",image);
    dispatch(uploadImage({frmData: imageForm, pid:_id}))
    .then(d => {
      const updateList = [...list]
        updateList.push(Object.assign(response.payload.data,{pic_url: preUrl}))
      dispatch(pushNewProduct(updateList))
    })  
    .catch(e => {
      console.log("error",e)
    })
    setTimeout(() => { setIsOpen(false);clearForm(); },200)
   })
   .catch(e => {
     console.log(e)
   })
   
  }
  const clearForm = () => {
    reset()
  }
  const rKey = (Math.random() + 1).toString(36).substring(7);
  console.log("errors",productTableData)
  return (
    <>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right">
      <Loader isloading={ loading } />
        <div class="container-scroller">
          <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center auth px-0">
              <div class="row w-100 mx-0">
                <div class="col-lg-12 mx-auto">
                  <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                    <div class="modal-header">
                      <h5 class="modal-title">Modal title</h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={ () => { setIsOpen(!isOpen); clearForm() }}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form class="pt-3" onSubmit={handleSubmit(onSubmitHandler)}>
                      <FormInput 
                        ref={register}
                        errorProps={errors}
                        setImage= { setImageForm}
                        setPreviewUrl ={ setPriviewImageUrl }
                      /> 
              
                      <DrawerFooter 
                       isOpen={isOpen}
                       clearFormProp ={ clearForm }
                       setIsOpen={setIsOpen}
                       />
                        
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
          </div>
          {/* page-body-wrapper ends */}
        </div>
      </Drawer>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Striped Table</h4>
                  <button
                    type="button"
                    class="btn btn-primary btn-rigth"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Add Products
                  </button>

                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead> 
                        <tr>
                          {tblHead && tblHead.length > 0 ? tblHead.map((head) => (
                            <th key={uuidv4() + rKey}>{head}</th>
                          )) : null }
                        </tr>
                      </thead>
                      <tbody>
                        { productTableData && productTableData.length > 0 && productTableData.map((li) => {
                          return (
                            <tr key={uuidv4() + rKey}>
                              {li.cellData && li.cellData.map((cell, index) =>
                                index === 0 ? (
                                  <td class="py-1">
                                    <img src={cell} alt={`user`} />
                                  </td>
                                ) : (
                                  <td>{cell}</td>
                                )
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListingPage;
