import * as React from "react";
import SignInForm from "./SignInForm";
import Main from "./Main";
import Flex from "./Flex";
import PrimaryText from "./PrimaryText";
import { ApiContext } from "./ApiContext";
import createApi from "./api";

function MainPlaceholder() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ height: "100vh" }}
    >
      <PrimaryText>Loading...</PrimaryText>
    </Flex>
  );
}

export default function App({ api: initialApi, env }) {
  const [api, setApi] = React.useState(initialApi);

  return !api ? (
    <SignInForm
      env={env}
      onSuccess={({ user }) => {
        setApi(createApi(env, user.authentication_token));
      }}
    />
  ) : (
    <ApiContext.Provider value={api}>
      <React.Suspense fallback={<MainPlaceholder />}>
        <Main />
      </React.Suspense>
    </ApiContext.Provider>
  );
}
