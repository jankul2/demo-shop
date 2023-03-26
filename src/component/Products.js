import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                console.log('productss')
                componentMounted = false;
            }
        }
        getProducts();
    }, [])
    const Loading = () => {
        console.log('working!');
        return (
            <>
             <div className="col-md-3">
             <Skeleton height={350} className={`border`}/>
             </div>
             <div className="col-md-3">
             <Skeleton height={350} className={`react-loading-skeleton border`}/>
             </div>
             <div className="col-md-3">
             <Skeleton height={350} className={`border`}/>
             </div>
             <div className="col-md-3">
             <Skeleton height={350} className={`border`}/>
             </div>
               
            </>
        )
    }
    const filterProduct=(cat)=>{
        const updatedList=data.filter(x=>x.category===cat);
        setFilter(updatedList,cat);
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="buttons d-flex justfy-content-center mb-5" >
                    <button onClick={()=>setFilter(data)} className="btn btn-outline-dark me-2">
                        All
                    </button>
                    <button onClick={()=>filterProduct("men's clothing")} className="btn btn-outline-dark me-2">
                        Men's Clothing
                    </button>
                    <button onClick={()=>filterProduct("women's clothing")} className="btn btn-outline-dark me-2">
                        Women's Clothing
                    </button>
                    <button onClick={()=>filterProduct("jewelery")} className="btn btn-outline-dark me-2">
                       Jewelery
                    </button>
                    <button onClick={()=>filterProduct("electronics")} className="btn btn-outline-dark me-2">
                        Electronics
                    </button>
                </div>
                {filter.map(product =>(
                         <div  key={product.id} className="col-md-3 mb-4 px-2">
                                <div className="card  text-center p-4">
                                    <img src={product.image} className="card-img-top"  alt={product.title}/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bolder "><i className="fa fa-inr" aria-hidden="true"></i> {product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                </div> 
                            </div>
                    )
                )}
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='latest-product fw-bolder text-center'>Latest Products</h1>
                    </div>
                    </div>
                    <hr />
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProduct />}
                    </div>
                
            </div>
        </div>
    )
}

export default Products