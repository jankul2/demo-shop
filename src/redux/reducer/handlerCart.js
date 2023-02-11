
import { loadState } from '../storage';
const cart = (loadState()?.handleCart) ? loadState().handleCart : [];
const handleCart = (state = cart, action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            //check if product is exist
            const itemExist = state.find(x => x.id === product.id);
            if (itemExist) {
                //increae qty
                return state.map(x => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            } else {
                console.log(action.type, action.payload)
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            break;

        case "IncQty":
            const itemExistIncQty = state.find(x => x.id === product.id);
            if (itemExistIncQty) {
                return state.map(x => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            }
            break;
        case "decQty":
            const itemExistdecQty = state.find(x => x.id === product.id);
            if (itemExistdecQty) {
                return state.map(x => x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            }
            break;
        case "DeletCartItem":
            const itemExistDeletCartItem = state.find(x => x.id === product.id);
            return state.filter(x => x.id !== itemExistDeletCartItem.id);
            break;
        default:
            return state;

    }
}
export default handleCart;