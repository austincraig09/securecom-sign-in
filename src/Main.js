import * as React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import PrimaryText from "./PrimaryText";
import CustomerInfo from "./CustomerInfo";
import { useApi } from "./ApiContext";
import { once, makeSuspendable, oncePerId } from "./utils";
import Field from "./Field";
import { space } from "./spacing";

const getCustomers = once(api => makeSuspendable(api.customers()));
const useCustomers = () => getCustomers(useApi()).read();

const getSystems = once((api, customerId) =>
  makeSuspendable(api.systems(customerId))
);
const useSystems = id => getSystems(useApi(), id).read();

function Page({ children }) {
  return <div style={{ padding: `${space(200)}` }}>{children}</div>;
}

function CustomerItem({ customer }) {
  const [showInfo, setShowInfo] = React.useState(false);

  return !showInfo ? (
    <ul onClick={() => setShowInfo(true)}>
      <PrimaryText>{customer.customer_name}</PrimaryText>
    </ul>
  ) : (
    <ul onClick={() => setShowInfo(false)}>
      <CustomerInfo customer={customer} />
    </ul>
  );
}

function SystemPage({ match }) {
  console.log("customer id", Number(match.params.id));
  return (
    <Page>
      <h1>
        <PrimaryText>Systems</PrimaryText>
      </h1>
      <ul>
        {useSystems(Number(match.params.id)).value.map(system => (
          <ul>
            <li>
              <PrimaryText>{system.name}</PrimaryText>
            </li>
          </ul>
        ))}
      </ul>
    </Page>
  );
}

function CustomersPage() {
  const [searchFilter, setSearchFilter] = React.useState("");

  return (
    <Page>
      <h1>
        <PrimaryText>Customers</PrimaryText>
      </h1>
      <ul>
        {useCustomers()
          .filter(item =>
            item.customer.customer_name
              .toLowerCase()
              .includes(searchFilter.toLowerCase())
          )
          .map(({ customer }) => (
            <CustomerItem customer={customer} />
          ))}
      </ul>

      <Field
        label="Search Filter"
        type="text"
        value={searchFilter}
        onChange={({ target }) => void setSearchFilter(target.value)}
        required
      />
    </Page>
  );
}

function IndexPage() {
  return <PrimaryText>You're at the index</PrimaryText>;
}

export default function Main() {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              {" | "}
              <Link to="/customers">Customers</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/customers/:id/systems" component={SystemPage} />
        <Route path="/customers" component={CustomersPage} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </main>
  );
}
