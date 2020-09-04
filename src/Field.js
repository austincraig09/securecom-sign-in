import * as React from "react";
import Input from "./Input";
import PrimaryText from "./PrimaryText";
import Space from "./Space";

function Field({ label, id, style = {}, ...rest }) {
  return (
    <label id={id} style={style}>
      <PrimaryText style={{ fontWeight: 500 }}>{label}</PrimaryText>
      <Space y={25} />
      <Input {...rest} />
    </label>
  );
}

export default Field;
