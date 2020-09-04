import * as React from "react";
import { red } from "./colors";
import Text from "./Text";

function WarningText(props) {
  return <Text {...props} color={red(600)} />;
}

export default WarningText;
