import React, { Fragment } from "react";
import { storeState, detectKeysChanged } from "./utils/storestate";

const WrapperForTest = props => {
  console.log("this.props.stateToSupply", props.stateToSupply, props);
  const {
    activateOnRender,
    activateOnCustomMethod,
    comparisionStore,
    stateToSupply,
    children,
    diffStateKey,
    getAffectedStateKeys
  } = props;

  storeState(stateToSupply, comparisionStore);

  if (getAffectedStateKeys === true) {
    detectKeysChanged();
  }

  return <Fragment>{children}</Fragment>;
};

export default WrapperForTest;
