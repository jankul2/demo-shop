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
    console.log('check Suscribe',state)
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
}
export async function setCoupan(state){
  console.log('coupan',state)
  const serializedState = JSON.stringify(state.coupan);
  localStorage.setItem(KEY, serializedState);
}
export function getCoupan() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return false;
    return JSON.parse(serializedState);
  } catch (e) {
    return false;
  }
}