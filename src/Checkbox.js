import * as React from "react";
import Focusable from "./Focusable";
import { space } from "./spacing";
import { primary, neutral } from "./colors";

function Checkbox({ checked, style, ...rest }) {
  const baseStyle = {
    ...style,
    padding: 0,
    margin: 0,
    WebkitAppearance: "none",
    appearance: "none",
    WebkitPrintColorAdjust: "exact",
    colorAdjust: "exact",
    display: "inline-block",
    boxSizing: "border-box",
    verticalAlign: "middle",
    backgroundOrigin: "border-box",
    userSelect: "none",
    cursor: "pointer",
    flexShrink: 0,
    height: space(100),
    width: space(100),
    color: primary(600),
    backgroundColor: "white",
    borderColor: neutral(300),
    borderWidth: "1px",
    borderRadius: ".25rem",
    lineHeight: "inherit",
    transitionDuration: "0.15s",
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    transitionProperty:
      "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform"
  };

  return (
    <Focusable
      {...rest}
      as="input"
      type="checkbox"
      focusBorderColor="transparent"
      style={
        checked
          ? {
              ...baseStyle,
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E")`,
              backgroundColor: "currentColor",
              backgroundSize: "100% 100%",
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat"
            }
          : baseStyle
      }
    />
  );
}

export default Checkbox;
