import {setCoupan,getCoupan } from '../storage';
const coupan=[];
export const handleCoupan=(state=coupan,action)=>{
    const coupan=action.payload;
    switch(action.type){
        case "setCoupan":
            console.log('getCoupanPrice',action.payload);
            return getCoupanPrice(coupan.coupan);

             break;
        case "deleteCoupan":
           
                break;
   
        default :
            return state;     
    
      }
}
function getCoupanPrice(code){
    console.log('code',code)
    if(code=='abcd'){
        return 22;
    }else{
        return false;
    }
}