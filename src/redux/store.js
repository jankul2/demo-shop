import { legacy_createStore as createStore } from 'redux';
import rootReducers from './reducer';
import { debounce } from "debounce";
import { loadState,saveState } from './storage';
//console.log('testData',loadState());

const store=createStore(rootReducers);
store.subscribe(
    // we use debounce to save the state once each 800ms
    // for better performances in case multiple changes occur in a short time
    debounce(() => {
      saveState(store.getState());
    }, 800)
  );
export default store;
/* 
import { legacy_createStore as createStore } from 'redux';
import rootReducers from './reducer';
import { debounce } from "debounce";
import { loadState,saveState } from './storage';
const initalState=loadState();
const store=createStore(rootReducers,initalState);

export default store; */