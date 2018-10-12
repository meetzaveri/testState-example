var stateHistoryArr = [];
export function storeState(stateToGet) {
  console.log("stateToGet", stateToGet);
  if (stateToGet.initialRender === true) {
    console.log("Initial render");
    stateHistoryArr[0] = stateToGet;
  } else {
    console.log("Updating state cycles");
    let temp = stateHistoryArr[0];
    console.log("temp", temp);
    stateHistoryArr[1] = temp;
    stateHistoryArr[0] = stateToGet;
  }

  console.log("stateHistoryArr", stateHistoryArr);
}
