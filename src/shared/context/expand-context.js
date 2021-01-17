import { createContext } from "react";

export const ExpandContext = createContext({
  animation: "overlay",
  direction: "left",
  dimmed: false,
  visible: false,
  setVisible: (v) => {},
});
