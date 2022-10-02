import React from 'react'
import Navbar from './Navbar'
import Footer from "./Footer"
import Product from "./Product"

export default function Home() {
  return (
    <div>

      <Navbar></Navbar>
      <div className='jumbotron text-center p-0 m-0'>
        <h1>Welcome to Digital Watches</h1>

        <div className='container'>
          <Product></Product>
        </div>

      </div>
      <Footer></Footer>

    </div>
  )
}
