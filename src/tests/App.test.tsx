import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders App", () => {
  render(<App />);
  const ReactRootComp = document.getElementById("root");
  expect(ReactRootComp).toBeInTheDocument();
});
