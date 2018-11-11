let stateHistoryArr = [];

export function storeState(stateToGet, comparisionStore) {
  console.log("stateToGet", stateToGet);
  if (stateToGet.initialRender === true) {
    console.log("Initial render");
    stateHistoryArr[0] = stateToGet;
  } else {
    console.log("Updating state cycles", stateToGet, comparisionStore);
    let temp = stateHistoryArr[0];
    // console.log("temp", temp);
    stateHistoryArr[1] = temp;
    stateHistoryArr[0] = stateToGet;
    if (
      stateToGet[comparisionStore._inputKey] ===
      stateToGet[comparisionStore._outputKey]
    ) {
      console.log(
        "State key comparision successful",
        stateToGet[comparisionStore._inputKey],
        stateToGet[comparisionStore._outputKey]
      );
    }
  }

  console.log("stateHistoryArr", stateHistoryArr);
}

export function resetState(stateToGet, stateKeyToCompare) {
  if (
    stateToGet[stateKeyToCompare] === null ||
    stateToGet[stateKeyToCompare] === ""
  ) {
    console.log("resetState success");
  }
}
