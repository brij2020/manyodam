import React from "react";
import { v4 as uuidv4 } from "uuid";
const ListingPage = (props) => {
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
  const rKey = (Math.random() + 1).toString(36).substring(7)
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Striped Table</h4>
                <p class="card-description">
                  Add class <code>.table-striped</code>
                </p>
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
                                <td class="py-1" >
                                  <img src={cell} alt={`user`} />
                                </td>
                              ) : (
                                <td >{cell}</td>
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
  );
};
export default ListingPage;
