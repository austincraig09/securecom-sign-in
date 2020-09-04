import * as React from "react";
import { neutral } from "./colors";
import Text from "./Text";

function PrimaryText(props) {
  return <Text {...props} color={neutral(1000)} />;
}

export default PrimaryText;
