import React, { Fragment ,useEffect} from 'react'
import MetaData from './layouts/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import Product from '../components/product/Product'
import Loader from '../components/layouts/Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
const Home = () => {
    const disptach = useDispatch();
    const {loading, products, productsCount,error} = useSelector(state => state.products)

    useEffect(()=>{
        if(error){
            return toast.error(error.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        disptach(getProducts());
    },[disptach,error])

  return (
    
    <Fragment>
        {loading ? <Loader /> : 
            <Fragment>
                <MetaData title={'Buy best products online'}/>
                <h1 id="products_heading">Latest Products</h1>
                <section id="products" className="container mt-5">
                    <div className="row">
                        {products && products.map(product => (
                            <Product key ={product._id} product={product}/>
                        ))}
                    </div>
                </section>
            </Fragment>
        }
    </Fragment>
  )
}

export default Home