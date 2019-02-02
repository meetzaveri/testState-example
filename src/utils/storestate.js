let stateHistoryArr = [];
let stateBuffer = [];

export function storeState(suppliedState, comparisionStore) {
  console.log("suppliedState", suppliedState);
  console.log("Updating state cycles", suppliedState, comparisionStore);
  let temp = stateBuffer[0];
  stateHistoryArr.push(suppliedState);
  stateBuffer[1] = temp;
  stateBuffer[0] = suppliedState;
  if (
    suppliedState[comparisionStore._inputKey] ===
    suppliedState[comparisionStore._outputKey]
  ) {
    console.log(
      "State key comparision successful",
      suppliedState[comparisionStore._inputKey],
      suppliedState[comparisionStore._outputKey]
    );
  }

  console.log("stateBuffer", stateBuffer);
}

export function getStateHistory() {
  return stateHistoryArr;
}

export function detectKeysChanged() {
  let currentState = stateBuffer[0];
  let prevState = stateBuffer[1];
  let keys = Object.keys(currentState);
  let keysThatHaveChanged = [];

  for (let key = 0; key < keys.length; key++) {
    const iteratee = keys[key];
    if (prevState[iteratee] !== currentState[iteratee]) {
      keysThatHaveChanged.push(iteratee);
    }
  }

  console.log("Keys that have changed", keysThatHaveChanged);
}

export function resetState(suppliedState, stateKeyToCompare) {
  if (
    suppliedState[stateKeyToCompare] === null ||
    suppliedState[stateKeyToCompare] === ""
  ) {
    console.log("resetState success");
  }
  const key = suppliedState[stateKeyToCompare];
  switch (key) {
    case null:
      return true;
    case "":
      return true;
    case []:
      return true;
    case {}:
      return true;
    default:
      return false;
  }
}
