import { variant } from "./utils";

export const elevation = variant(
  {
    0: "0 0 0 rgba(0,0,0,0)",
    100: "0 1px 2px rgba(0,0,0,0.05)",
    200: "0 1px 3px rgba(0,0,0,0.2)",
    300: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    400: "0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)",
    500: "0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)",
    600: "0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)",
    700: "0 20px 40px rgba(0,0,0,0.2)"
  },
  100
);
