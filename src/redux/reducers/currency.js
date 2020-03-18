const initialState = {
  usd: 0,
  yen: 0
};

const currencyReducer = (state = initialState, action) => {
  console.log("action", action); //action {type: "CONVERT", payload: {usd: "1", yen: 113}}
  switch (action.type) {
    case "CONVERT":
      return {
        ...action.payload
      };
    // case "YEN_CHANGE":
    //   return {
    //     ...state,
    //     yen: action.payload
    //   };
    default:
      return state;
  }
};

export default currencyReducer;
