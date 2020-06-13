import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
/************arrange  *************************************/
    const {getByText} = render(<CheckoutForm />);
/***********act *******************************************/
    const checkoutHeader = getByText(/checkout form/i);
/************assert    ************************************/
    expect(checkoutHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {});
