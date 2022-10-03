
import React, { Component } from 'react';
import axios from 'axios';

export default class ProductNew extends Component {

  constructor(props) {
    super(props)
    this.state = {
      productData: [],
    }
  }


  componentDidMount() {

    axios.get(`http://localhost:5500/product/getAllProduct`)
      .then(response => {
        const product = response.data;
        this.setState({productData:product});
      });
  }


  render() {
    return (
      <div>


    <div className="row">

        {this.state.productData.map(ele => {
            return   <div className="col-sm-4 " style={{ background: "white" }}>
              <div
                className="container "
                style={{ background: "", margin: "10px", height: "600px" }}
              >
                <div>
                  <div className="card">
                    <img
                      src={ele.productURL}
                      className="card-img-top"
                      width="250px"
                      heigh="450px"
                      alt=""
                    /><br />
                    <div className="card-body">
                      <h4 className="card-title text-info">
                      {ele.name}
                        <br /> <span>{ele.description}</span>
                      </h4>
                      <h3 className="card-title">₹ {ele.price} </h3>
                      <p className="card-text">
                        <b>Rating : {ele.rating}</b>
                        <br />
                        {/* <b>Special Price</b> Get extra 25% off (price inclusive of
                        cashback/coupon)
                        <br />
                        <b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank Card */}
                      </p>
                      <button className="btn btn-warning" >
                        Add to Card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })}
       </div>
      

       
      </div>

    );
  }
}
