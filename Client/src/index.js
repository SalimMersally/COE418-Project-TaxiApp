import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  black: "#252525",
  Yellow: {
    400: "#FFC000",
  },
  gray: {
    400: "#C4C4C4",
  },
  button: {
    500: "#C4C4C4",
    700: "#FFC000",
  },
};

const theme = extendTheme({ colors });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
