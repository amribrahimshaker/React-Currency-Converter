export const convert = newState => {
  console.log("newState", newState); // newState {usd: "1", yen: 113}
  return {
    type: "CONVERT",
    payload: newState
  };
};
