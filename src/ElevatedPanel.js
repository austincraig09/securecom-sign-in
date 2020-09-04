import * as React from "react";
import Elevated from "./Elevated";

function ElevatedPanel({ value, style = {}, ...rest }) {
  return (
    <Elevated
      {...rest}
      value={value}
      style={{
        ...style,
        backgroundColor: "white",
        borderRadius: "8px"
      }}
    />
  );
}

export default ElevatedPanel;
