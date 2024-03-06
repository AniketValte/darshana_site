import { createSignal } from "solid-js";
import { getData, storeData } from "services/localStorage";

export function createStore(key, initState, localStorage = false) {
  const storedState = getData(key);
  let initialState = storedState ? storedState : initState;
  const [state, setState] = createSignal(initState);

  setState(initialState);
  if (localStorage) {
    storeData(key, initialState);
  }

  const setValueAndStore = (value) => {
    setState(value);
    if (localStorage) {
      storeData(key, initialState);
      storeData(key, value);
    }
  };

  return [state, setValueAndStore];
}
