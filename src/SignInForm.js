import * as React from "react";
import { vkUrl } from "./api";
import Flex from "./Flex";
import { space } from "./spacing";
import VirtualKeypadLogo from "./VirtualKeypadLogo";
import Space from "./Space";
import ElevatedPanel from "./ElevatedPanel";
import Field from "./Field";
import PrimaryText from "./PrimaryText";
import Button from "./Button";
import CheckboxField from "./CheckboxField";
import WarningText from "./WarningText";

const authenticate = ({ env, email, password }) =>
  fetch(`${vkUrl(env)}/v2/authenticate`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: { email, password }
    })
  }).then(response =>
    response.ok ? response.json() : Promise.reject(response)
  );

function Root({ children }) {
  return (
    <Flex
      style={{ width: "100vw", height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  );
}

function Form({ header, children, errorMessage, ...rest }) {
  return (
    <form {...rest} style={{ width: "100%", maxWidth: space(1100) }}>
      {header}
      <Space y={400} />
      <ElevatedPanel
        value={200}
        style={{ padding: `${space(300)} ${space(400)}` }}
      >
        {children}
      </ElevatedPanel>
      <div
        style={{
          height: space(500),
          paddingTop: space(100),
          textAlign: "center"
        }}
      >
        <WarningText>{errorMessage}</WarningText>
      </div>
    </form>
  );
}

function Header() {
  return (
    <header>
      <div style={{ maxWidth: space(400), margin: "0 auto" }}>
        <VirtualKeypadLogo theme="dark" />
      </div>
      <PrimaryText as="h1" fontSize={800} textAlign="center">
        Sign in to your account
      </PrimaryText>
    </header>
  );
}

function EmailField({ email, setEmail }) {
  return (
    <Field
      label="Email Address"
      type="email"
      value={email}
      onChange={({ target }) => void setEmail(target.value)}
      required
    />
  );
}

function PasswordField({ password, setPassword }) {
  return (
    <Field
      label="Password"
      type="password"
      value={password}
      onChange={({ target }) => void setPassword(target.value)}
      required
    />
  );
}

export default function SignInForm({ env, onSuccess }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  return (
    <Root>
      <Form
        onSubmit={event => {
          event.preventDefault();

          authenticate({ env, email, password })
            .then(json => {
              onSuccess(json);

              if (rememberMe) {
                localStorage.setItem(
                  "authToken",
                  json.user.authentication_token
                );
              } else {
                sessionStorage.setItem(
                  "authToken",
                  json.user.authentication_token
                );
              }
            })
            .catch(() => {
              setErrorMessage("Invalid email or password. Please try again.");
            });
        }}
        header={<Header />}
        errorMessage={errorMessage}
      >
        <EmailField email={email} setEmail={setEmail} />
        <Space y={200} />
        <PasswordField password={password} setPassword={setPassword} />
        <Space y={200} />
        <CheckboxField
          label="Remember Me"
          checked={rememberMe}
          onChange={() => void setRememberMe(!rememberMe)}
        />
        <Space y={400} />
        <Button style={{ width: "100%" }}>Sign in</Button>
      </Form>
    </Root>
  );
}
