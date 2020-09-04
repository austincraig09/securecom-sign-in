import * as React from "react";
import Flex from "./Flex";
import Checkbox from "./Checkbox";
import PrimaryText from "./PrimaryText";

function CheckboxField({ label, ...rest }) {
  return (
    <Flex as="label" alignItems="center">
      <Checkbox {...rest} />
      <PrimaryText ml={50} fontSize={200}>
        {label}
      </PrimaryText>
    </Flex>
  );
}

export default CheckboxField;
