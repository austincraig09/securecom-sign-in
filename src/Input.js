import * as React from "react";
import { neutral } from "./colors";
import { space } from "./spacing";
import { fontSize } from "./typography";
import { elevation } from "./elevation";
import Focusable from "./Focusable";

function Input({ style, ...rest }) {
  return (
    <Focusable
      {...rest}
      as="input"
      style={{
        display: "block",
        width: "100%",
        padding: `0 ${space(100)}`,
        boxShadow: elevation(100),
        borderRadius: "6px",
        backgroundColor: "white",
        margin: 0,
        fontFamily: "inherit",
        fontSize: fontSize(300),
        lineHeight: fontSize(900),
        color: neutral(1000),
        appearance: "none",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: neutral(200),
        ...style
      }}
    />
  );
}

export default Input;
