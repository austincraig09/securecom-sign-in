import * as React from "react";

function Flex({
  as = "div",
  style,
  justifyContent,
  alignItems,
  children,
  ...rest
}) {
  return React.createElement(
    as,
    {
      ...rest,
      style: {
        justifyContent,
        alignItems,
        ...style,
        display: "flex"
      }
    },
    children
  );
}

export default Flex;
