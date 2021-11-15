import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Drawer from "../Components/Drawer";
import DrawerFooter from "./DrawerFooter";
import FormInput,{ schema} from "./ProductFormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AddProduct } from "../Store/Services/ProductsList";
import Loader from "../Components/LoadingProp";
import { useDispatch,useSelector } from "react-redux";

const ListingPage = (props) => {
  const dispatch = useDispatch()
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
  const { loading } = useSelector((store) => store.userLogin);
  const [isOpen, setIsOpen] = useState(false);
  const onSubmitHandler = (data) => {
    
    dispatch(AddProduct(data,dispatch))
  }
  const rKey = (Math.random() + 1).toString(36).substring(7);
  console.log("errors",errors)
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
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form class="pt-3" onSubmit={handleSubmit(onSubmitHandler)}>
                      <FormInput 
                        ref={register}
                        errorProps={errors}
                        setImage= { setImageForm}
                      /> 
              
                      <DrawerFooter 
                       isOpen={isOpen}

                       setIsOpen={setIsOpen}/>
                        
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
                          {config.tblHead.map((head) => (
                            <th key={uuidv4() + rKey}>{head}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2].map((li) => {
                          return (
                            <tr key={uuidv4() + rKey}>
                              {config.cellData.map((cell, index) =>
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
