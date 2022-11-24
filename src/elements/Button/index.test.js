import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";
/* eslint-disable */
test("Should not allowed click if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);
  const con = container.querySelector("span.disabled");
  expect(con).toBeInTheDocument();
});
test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);
  expect(getByText(/Loading/i)).toBeInTheDocument();
  const con = container.querySelector("span");
  expect(con).toBeInTheDocument();
});
test("Should render tag <a>", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  const con = container.querySelector("a");
  expect(con).toBeInTheDocument();
});
test("Should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link" isExternal></Button>
    </Router>,
  );

  const con = container.querySelector("a");
  expect(con).toBeInTheDocument();
});
