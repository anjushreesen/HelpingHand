import React from "react";
import { Link } from "react-router-dom";

export default function Eshop({ EshopsObj }) {
  return (
    <>
      {EshopsObj.length === 0 ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <div className="container eleccontainer">
          <div className="banner">
            <h1>Electrical Shops</h1>
          </div>          
            <div className="row">
                {EshopsObj.map((Eshop, key) => (
                  <>
                    <div className="col-lg-4 mb-4">
                      <div className="card">
                        <img
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3eca3062037097.5a8fec1b66428.jpg"
                          alt=""
                          className="card_image"
                        />
                        <div className="card-body">
                          <h2 className="card-title">
                            <b>{Eshop.shopName}</b>
                          </h2>
                          <p className="card-text">{Eshop.description}</p>
                          <p>
                            City : <b>{Eshop.city}</b>
                          </p>
                          <p>
                            Address : <b>{Eshop.address}</b>
                          </p>
                          <br /> <br /> <br />
                          <i className="fas fa-user"></i> Owner :{" "}
                          {Eshop.ownerName} <br />
                          <i className="fas fa-phone-square"></i>  Phone :{"     "}
                          {Eshop.phoneNo} <br />
                          <i className="fas fa-envelope-square"></i>Mail :{" "}
                          {Eshop.email} <br /> <br />
                          <Link
                            to={{
                              pathname: `/Items?${Eshop._id}`,
                              state: {
                                shopprop: true,
                              },
                            }}
                          >
                            <button type="button" className="boxbutton">
                                Items
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
        </>
      )}
    </>
  );
}
