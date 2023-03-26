import {getCoupan } from '../redux/storage';
export const totalPrice=(cart)=>{
   //console.log('service',getCoupan())
 const coupanPrice=(Object.keys(getCoupan()).length)?getCoupan().cost:0;
//{data.reduce((total, item)=>total+(item.aprice*item.quantity),0)}
 let total=cart.reduce((total,item)=>(total+(item.price*item.qty)),0);
 //console.log('toatl cart:',total,getCoupan())
 if(total.toFixed(2)-coupanPrice.toFixed(2) >= 0){
    return total.toFixed(2)-coupanPrice.toFixed(2);
 }else{
    return 0;
 }
}