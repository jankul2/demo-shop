// for add item to cart
export const addCart=(product)=>{
    return {
        type:"ADDITEM",
        payload:product
    }
}
//for delete item from cart

export const IncQty=(product)=>{
    return {
        type:"IncQty",
        payload:product
    }
}
export const decQty=(product)=>{
    return {
        type:"decQty",
        payload:product
    }
}
export const deletCartItem=(product)=>{
    return {
        type:"DeletCartItem",
        payload:product
    }
}
export const setCoupan=(coupan)=>{
    return {
        type:"setCoupan",
        payload:coupan
    }
}
export const removeCoupan=()=>{
    return {
        type:"deleteCoupan",
    }
}