import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {addCart} from '../redux/action'
function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visibleAlert, setAlertVisible] = useState(false);
    const [cartProduct, setCartProduct] = useState({});
    const dispatch=useDispatch();
    const notificationMessage = (product) => { 
        console.log('cart added',product);
        setAlertVisible(true)
        setTimeout(() => { 
            setAlertVisible(false)
        }, 4000);
        setCartProduct({"productName":product.title,"qty":product.qty})
    } 
    const addProduct=(product)=>{
        console.log(product);
        dispatch(addCart(product));
        notificationMessage(product);
    }
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProducts();
/*         return () => {
            notificationMessage();
        }; */
    }, []);
    const Loading = () => {
        return (
            <>
            <div className="col-md-6" style={{lineHeight:2}}>
            <Skeleton height={400}/>
            </div>
            <div className="col-md-6">
            <Skeleton height={50} width={300}/>
            <Skeleton height={75}/>
            <Skeleton height={25} width={150} />
            <Skeleton height={50}/>
            <Skeleton height={150}/>
            <Skeleton height={50} width={100}/>
            <Skeleton height={50} width={100} style={{marginLeft:6}}/>
            </div>
            </>
        )

    }
    const ShowProduct = () => {
        return (
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height={`400px`} width={`400px`} />
            </div>
            <div className="col-md-6"> 
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                    Rating {product.rating && product.rating.rate} 
                    <i className="fa fa-star"></i>
                    </p>

                    <h3 className="display-6 fw-bold my-4">
                    <i className="fa fa-inr" aria-hidden="true"></i>
                        {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button onClick={()=>addProduct(product)} className='btn btn-outline-dark px-4 py-2'>
                        Add to Cart
                    </button>
                    <NavLink to={`/cart`} className='btn btn-dark ms-2 px-3'>
                        Go to Cart
                    </NavLink>
            </div>
            </>
        )
    }
    return (
        <div>
            <div className="container py-5">
            {visibleAlert && (<div className="alert alert-primary alert-dismissible fade show" role="alert">
                <strong>{cartProduct?.productName} </strong> product is added in cart.
                <button type="button" className="btn-close" onClick={()=>setAlertVisible(false)} data-bs-dismiss="alert" aria-label="Close"></button>
                </div>)}
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product;