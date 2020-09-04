import * as React from "react";
import { neutral } from "./colors";
import Text from "./Text";
import ElevatedPanel from "./ElevatedPanel";
import { Switch, Route, Link, Redirect } from "react-router-dom";

export default function CustomerInfo({ customer }) {
  console.log(customer);
  return (
    <>
      <ElevatedPanel>
        <Text color={neutral(1000)}>{customer.customer_name}</Text>
        <Text color={neutral(1000)}>{customer.customer_address}</Text>
        <br />
        <Text color={neutral(1000)}>{customer.customer_city}</Text>
        <br />
        <Text color={neutral(1000)}>{customer.customer_state_province}</Text>
        <br />
        <Text color={neutral(1000)}>{customer.customer_postal_code}</Text>
        <br />
        <Link to={`customers/${customer.customer_id}/systems`}>
          View Systems
        </Link>
      </ElevatedPanel>
    </>
  );
}
