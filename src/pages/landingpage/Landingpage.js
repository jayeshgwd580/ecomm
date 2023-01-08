// import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
// import { Axiosinstance } from '../../util/axiosinstance'
import './lp.css'

export const Landingpage = () => {
    const data = ['All Products','Electronics','Sports','Kitchenware']
    // const [categories, setCategories] = useState([])
    // const fetchCategories = async()=>{
//     try {
//         const result = await Axiosinstance.get('/categories')
//         console.log(result)
        // setCategories(result.dat)
//     } catch (error) {
//         console.log(error)
//     }
// }    
//   useEffect(()=>{
//     fetchCategories();
//   },[])
    return (
    <>
    <Navbar />
    <div className="container">
      <div className="col-12">
        <h2 className="home-title">Welcome to Online Shoppiee....</h2>
        <div className="col-12">
          <div className="category-list">
            {/* <div className="category-item">
                <a href="/products">All Products</a>
            </div>
            <div className="category-item">
                <a href="/products">Electronics</a>
            </div> */}
            {
                data.map((category, index)=>(
                    <div className='category-item' key={index}>
                        <a href="/products">{category}</a>
                    </div>
                ))
            }
            {/* {
                categories.map((category, index)=>(
                    <div className='category-item' key={index}>
                        <a href="/products">{category.name}</a>
                    </div>
                ))
            } */}
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}
