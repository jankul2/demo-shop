import { setCoupan, getCoupan } from '../storage';
const coupan = getCoupan();
export const handleCoupan = (state = coupan, action) => {
    const coupan = action.payload;
    switch (action.type) {
        case "setCoupan":
            let coupanObj=getCoupanPrice(coupan.coupan);
            return { ...action.payload, cost: coupanObj.cost,status:coupanObj.status};
            //return { ...action.payload, cost: getCoupanPrice(coupan.coupan) };
            break;
        case "deleteCoupan":
            return {};
            break;

        default:
            return state;

    }
}
function getCoupanPrice(code) {
    console.log('code', code)
    if (code == 'test') {
        return {cost:10,status:true};
    } else {
        return {cost:0,status:false};
    }
}