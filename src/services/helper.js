export const totalPrice=(cart)=>{
    console.log('checkToatl',cart)
//{data.reduce((total, item)=>total+(item.aprice*item.quantity),0)}
 let total=cart.reduce((total,item)=>total+(item.price*item.qty),0);
return total;
}