import { setCoupan, getCoupan } from '../storage';
const coupan = getCoupan();
export const handleCoupan = (state = coupan, action) => {
    const coupan = action.payload;
    switch (action.type) {
        case "setCoupan":
            return { ...action.payload, cost: getCoupanPrice(coupan.coupan) };
            break;
        case "deleteCoupan":
            console.log('delete working!')
            return {};
            break;

        default:
            return state;

    }
}
function getCoupanPrice(code) {
    console.log('code', code)
    if (code == 'abcd') {
        return 22;
    } else {
        return false;
    }
}