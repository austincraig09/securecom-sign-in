import * as React from "react";
import { fontSize } from "./typography";
import { neutral } from "./colors";
import { space } from "./spacing";

function Text({
  as = "span",
  fontSize: fontSizeValue = 300,
  textAlign,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  color = neutral(1000),
  style = {},
  children,
  ...rest
}) {
  return React.createElement(
    as,
    {
      ...rest,
      style: {
        ...style,
        margin: `${mt && space(mt)} ${mr && space(mr)} ${mb &&
          space(mb)} ${ml && space(ml)}`,
        fontSize: fontSize(fontSizeValue),
        color,
        textAlign
      }
    },
    children
  );
}

export default Text;
