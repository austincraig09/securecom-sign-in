import * as React from "react";

export const ApiContext = React.createContext(null);

export const useApi = () => React.useContext(ApiContext);
