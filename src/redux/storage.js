const KEY = "cart";
const KEY_COUPAN = "cart_coupan";
export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return false;
    return JSON.parse(serializedState);
  } catch (e) {
    return false;
  }
}

export async function saveState(state) {
  try {
    console.log('storage:-',state)
    const serializedState = JSON.stringify({handleCart:state});
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
}
export async function setCoupan(state){
  console.log('coupan set',state)
  const serializedState = JSON.stringify(state);
  sessionStorage.setItem(KEY_COUPAN, serializedState);
}
export function getCoupan() {
  try {
    const serializedState = sessionStorage.getItem(KEY_COUPAN);
    if (!serializedState) return false;
    return JSON.parse(serializedState);
  } catch (e) {
    return false;
  }
}