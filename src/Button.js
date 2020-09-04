import * as React from "react";
import { primary } from "./colors";
import { space } from "./spacing";
import { elevation } from "./elevation";
import { fontSize } from "./typography";
import Focusable from "./Focusable";

const noop = () => {};

function Button({
  style = {},
  onMouseEnter = noop,
  onMouseLeave = noop,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  return (
    <Focusable
      {...rest}
      as="button"
      onMouseEnter={event => {
        setHover(true);
        onMouseEnter(event);
      }}
      onMouseLeave={event => {
        setHover(false);
        onMouseLeave(event);
      }}
      focusBorderColor={primary(900)}
      style={{
        appearance: "button",
        boxShadow: elevation(100),
        padding: `${space(75)} ${space(200)}`,
        borderRadius: ".375rem",
        border: "1px solid transparent",
        backgroundColor: hover ? primary(500) : primary(600),
        color: "white",
        lineHeight: "1.25rem",
        fontFamily: "inherit",
        fontSize: fontSize(300),
        fontWeight: 500,
        cursor: "pointer",
        transitionDuration: "0.15s",
        transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
        transitionProperty:
          "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform",
        ...style
      }}
    />
  );
}

export default Button;
