import * as React from "react";
import { elevation } from "./elevation";

function Elevated({ value, style = {}, as = "div", children, ...rest }) {
  return React.createElement(
    as,
    {
      ...rest,
      style: {
        ...style,
        boxShadow: elevation(value)
      }
    },
    children
  );
}

export default Elevated;
