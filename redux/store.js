import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";

// create your reducer
const reducer = (state = { tick: "init" }, action) => {
  switch (action.type) {
    case "MENU_STATE":
      return { menuState: action.payload };
    default:
      return state;
  }
};

// create a makeStore function
const makeStore = (context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
