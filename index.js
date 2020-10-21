const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// (previes state , action ) => newstate

const initialState = [
  {
    numOfCakes: 10,
  },
];

const reducer = (initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...initialState,
        numOfCakes: initialState.numOfCakes - 1,
      };

    default:
      return initialState;
      break;
  }
};
