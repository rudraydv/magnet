import React, { useEffect } from 'react';
import { CgMouse } from 'react-icons/cg';
import MetaData from '../layout/MetaData';
import { clearErrors, getProducts } from '../../actions/ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/loader/Loader';
import { useAlert } from 'react-alert'
import ProductCard from '../product/ProductCard';


const Home = () =>{

    const {loading,error,products} = useSelector((state) =>state.products); 

    const dispatch = useDispatch();
    const alert = useAlert();

    useEffect(()=>{
        if(error){
           alert.error(error);
           dispatch(clearErrors());
        }
        dispatch(getProducts());
    },[dispatch , error, alert]);

    

    return(
        <>
       {loading ?
        <Loader/> :
       <>
        <MetaData title = "Ecommerce"/>
      
        <h2 className="text-center font-roboto text-xl m-auto my-10 p-1 text-gray-800 border-b-[1px] border-[rgba(21,21,21,0.5)] w-60 shadow-xl shadow-slate-100"> Product</h2>

        <div className="container mx-auto flex flex-wrap justify-center gap-4" id ="container">
            {products && products.map((product)=><ProductCard product={product}/>)}
        </div>
       </>
       }
        </>
    );
};

export default Home;