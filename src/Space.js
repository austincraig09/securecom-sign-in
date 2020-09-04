import * as React from "react";
import { space } from "./spacing";

function Space({ x, y, style = {}, as = "div", children, ...rest }) {
  return React.createElement(
    as,
    {
      ...rest,
      style: {
        ...style,
        height: y ? space(y) : undefined,
        width: x ? space(x) : undefined
      }
    },
    children
  );
}

export default Space;
