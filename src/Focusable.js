import * as React from "react";

const noop = () => {};

function Focusable({
  as = "span",
  style = {},
  children,
  onFocus = noop,
  onBlur = noop,
  focusBorderColor = "#a4cafe",
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);

  return React.createElement(
    as,
    {
      ...rest,
      onFocus: event => {
        setFocus(true);
        onFocus(event);
      },
      onBlur: event => {
        setFocus(false);
        onBlur(event);
      },
      style: {
        ...style,
        outline: "none",
        boxShadow: focus ? "0 0 0 3px rgba(164,202,254,.45)" : style.boxShadow,
        borderColor: focus ? focusBorderColor : style.borderColor
      }
    },
    children
  );
}

export default Focusable;
