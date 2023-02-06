import handleCart from './handlerCart';
import {combineReducers} from 'redux';
import { handleCoupan } from './handleCoupan';
const rootReducers=combineReducers({
    handleCart,
    handleCoupan
    
})
export default rootReducers;