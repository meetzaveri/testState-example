import React, { Fragment } from "react";
import { storeState } from "./storestate";

const WrapperForTest = props => {
  console.log("this.props.stateToSupply", props.stateToSupply);
  const {
    activateInitialRenderTrigger,
    activateCustomTrigger,
    comparisionStore,
    stateToSupply,
    children
  } = props;

  if (activateInitialRenderTrigger === true || activateCustomTrigger === true)
    storeState(stateToSupply, comparisionStore);

  return <Fragment>{children}</Fragment>;
};

export default WrapperForTest;
