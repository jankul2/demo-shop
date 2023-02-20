// for add item to cart
export const addCart=(product)=>{
    return {
        type:"ADDITEM",
        payload:product
    }
}
//for delete item from cart

export const updateQty=(product,qty)=>{
    return {
        type:"updateQty",
        payload:{product,qty}
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