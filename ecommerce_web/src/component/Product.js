
import React, { Component } from 'react';
import axios from 'axios';

class ProductNew extends Component {

  

  constructor(props) {
    super(props)
    this.state = {
       productData: {},
    }
 }

  

  componentDidMount() {

    axios.get(`http://localhost:5500/product/getAllProduct`)
      .then(response => {
        const product = response.data;
        console.log(product[0].name)
        this.setState({
          productData:product
        })
       
      })
  }


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-4 " style={{ background: "white" }}>
            <div
              className="container "
              style={{ background: "", margin: "10px", height: "600px" }}
            >
              <div>
                <div className="card">
                  <img
                    src="https://rukminim1.flixcart.com/image/832/832/l19m93k0/watch/i/b/s/1-7k2s7-square-led-black-flozio-boys-girls-original-imagcvhvat62eucd.jpeg?q=70"
                    className="card-img-top"
                    width="250px"
                    heigh="450px"
                    alt=""
                  /><br />
                  <div className="card-body">
                    <h4 className="card-title text-info">
                      Flozio
                      <br /> <span>7k2s7- Square LED Black Digital Watch - For Boys & Girls</span>
                    </h4>
                    <h3 className="card-title">₹500 </h3>
                    {/* <p className="card-text">
                      <b>Available offers</b>
                      <br />
                      <b>Special Price</b> Get extra 25% off (price inclusive of
                      cashback/coupon)
                      <br />
                      <b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank Card
                    </p> */}
                    <button className="btn btn-warning" >
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 " style={{ background: "white" }}>
            <div
              className="container "
              style={{ background: "", margin: "10px", height: "600px" }}
            >
              <div>
                <div className="card">
                  <img
                    src="https://rukminim1.flixcart.com/image/832/832/l31x2fk0/watch/d/g/t/black-femava-boys-girls-original-image9eqfsuzuycs.jpeg?q=70"
                    className="card-img-top"
                    width="200px"
                    heigh="300px"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title text-info">
                      FEMAVA
                      <br /> <span>BLACK Digital Watch - For Boys & Girls</span>
                    </h4>
                    <h3 className="card-title">₹149 </h3>
                    {/* <p className="card-text">
                      <b>Available offers</b>
                      <br />
                      <b>Special Price</b> Get extra 25% off (price inclusive of
                      cashback/coupon)
                      <br />
                      <b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank Card
                    </p> */}
                    <button className="btn btn-warning" >
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 " style={{ background: "white" }}>
            <div
              className="container "
              style={{ background: "", margin: "10px", height: "600px" }}
            >
              <div>
                <div className="card">
                  <img
                    src="https://rukminim1.flixcart.com/image/312/312/xif0q/smartwatch/3/d/i/-original-imaghbgafqnjygta.jpeg?q=70"
                    className="card-img-top"
                    width="200px"
                    heigh="450px"
                    alt=""
                  /><br /><br /><br />
                  <div className="card-body">
                    <h4 className="card-title text-info">
                      boAt Storm call 1.69 inch
                      <br /> <span>bluetooth calling and 550 nits brightness</span>
                    </h4>
                    <h3 className="card-title">₹2,999 </h3>
                    {/* <p className="card-text">
                      <b>Available offers</b>
                      <br />
                      <b>Special Price</b> Get extra 25% off (price inclusive of
                      cashback/coupon)
                      <br />
                      <b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank Card
                    </p> */}
                    <button className="btn btn-warning" >
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* add more img */}

        <div className="row">
          <div className="col-sm-4 " style={{ background: "white" }}>
            <div
              className="container "
              style={{ background: "", margin: "10px", height: "600px" }}
            >
              <div>
                <div className="card">
                  <img
                    src="https://rukminim1.flixcart.com/image/312/312/kybvo280/smartwatch/o/r/f/1-65-android-ios-dsm-90003-1-daniel-klein-yes-original-imagahfhrmcq8s9b.jpeg?q=70"
                    className="card-img-top"
                    width="250px"
                    heigh="450px"
                    alt=""
                  /><br />
                  <div className="card-body">
                    <h4 className="card-title text-info">
                    Daniel Klein Daniel Klein ZING
                      <br /> <span>Smartwatch Full Touch With 1.65" IPS Color Display-DSM.90003-1</span>
                    </h4>
                    <h3 className="card-title">₹1,690 </h3>
                    <button className="btn btn-warning" >
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 " style={{ background: "white" }}>
            <div
              className="container "
              style={{ background: "", margin: "10px", height: "600px" }}
            >
              <div>
                <div className="card">
                  <img
                    src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/w/p/a/-original-imaggxudugaaczwu.jpeg?q=70"
                    className="card-img-top"
                    width="280px"
                    heigh="400px"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title text-info">
                    Fire-Boltt Ninja Calling Pro
                      <br /> <span>Bluetooth Calling Smartwatch 1.69 inch HD Display Smartwatch </span>
                    </h4>
                    <h3 className="card-title">₹2,499 </h3>
                   

                    <button className="btn btn-warning" >
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 " style={{ background: "white" }}>
            <div
              className="container "
              style={{ background: "", margin: "10px", height: "600px" }}
            >
              <div>
                <div className="card">
                  <img
                    src="https://rukminim1.flixcart.com/image/416/416/kybvo280/smartwatch/w/8/6/1-3-android-ios-dsm-90001-2-daniel-klein-yes-original-imagahfvgyxnyyw4.jpeg?q=70"
                    className="card-img-top"
                    width="250px"
                    heigh="450px"
                    alt=""
                  /><br /><br /><br />
                  <div className="card-body">
                    <h4 className="card-title text-info">
                    Daniel Klein
                      <br /> <span>Full Touch With 1.3" IPS Color Display- DSM.90001-2</span>
                    </h4>
                    <h3 className="card-title">₹1,690 </h3>
                    <button className="btn btn-warning" >
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default ProductNew;
