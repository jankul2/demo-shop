import { legacy_createStore as createStore } from 'redux';
import rootReducers from './reducer';
import { debounce } from "debounce";
import { loadState,saveState,setCoupan } from './storage';
//console.log('testData',loadState());

const store=createStore(rootReducers);
/* store.subscribe(
    // we use debounce to save the state once each 800ms
    // for better performances in case multiple changes occur in a short time
    debounce(() => {
    let reduxStore=store.getState();
      saveState(reduxStore.handleCart);
      setCoupan(reduxStore.handleCoupan);
    },10)
    
  ); */
  store.subscribe(() => {
   console.log('working suscribe concept!');
   let reduxStore=store.getState();
      saveState(reduxStore.handleCart);
      setCoupan(reduxStore.handleCoupan);
});
export default store;