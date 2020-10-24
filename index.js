const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_IceCream = "BUY_IceCream";

function buyIceCream() {
  return {
    type: BUY_IceCream,
  };
}

function buy_cake() {
  return {
    type: BUY_CAKE,
  };
}
const initialState = {
  numofcake: 10,
};

const initialStateIceCream = {
  numOfIceCream: 10,
};

const reducerIceCream = (state = initialStateIceCream, action) => {
  switch (action.type) {
    case buyIceCream:
      return {
        ...state,
        numOfIceCream: state.initialStateIceCream - 1,
      };
    default:
      return {
        ...state,
      };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofcake: state.numofcake + 1,
      };

    default:
      return {
        ...state,
      };
  }
};

const rootReducer = combineReducers({
  cake: reducer,
  icecream: reducerIceCream,
});

const store = createStore(rootReducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);
console.log("update state", store.getState());
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_cake());
unsubscribe();
