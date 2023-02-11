import {getCoupan } from '../redux/storage';
export const totalPrice=(cart)=>{
    const coupanPrice=(Object.keys(getCoupan()).length)?getCoupan().cost:0;
//{data.reduce((total, item)=>total+(item.aprice*item.quantity),0)}
 let total=cart.reduce((total,item)=>(total+(item.price*item.qty))-coupanPrice,0);
 console.log('toatl cart:',total,getCoupan())
return total.toFixed(2);
}