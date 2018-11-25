let stateHistoryArr = [];
let stateBuffer = [];

export function storeState(stateToGet, comparisionStore) {
  console.log("stateToGet", stateToGet);
  console.log("Updating state cycles", stateToGet, comparisionStore);
  let temp = stateBuffer[0];
  // console.log("temp", temp);
  stateBuffer[1] = temp;
  stateBuffer[0] = stateToGet;
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

  console.log("stateBuffer", stateBuffer);
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

export function resetState(stateToGet, stateKeyToCompare) {
  if (
    stateToGet[stateKeyToCompare] === null ||
    stateToGet[stateKeyToCompare] === ""
  ) {
    console.log("resetState success");
  }
}
