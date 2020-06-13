import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
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

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByTestId, getByDisplayValue } = render(<CheckoutForm />);

    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const address = getByLabelText(/address/i);
    const city = getByLabelText(/city/i);
    const state = getByLabelText(/state/i);
    const zip = getByLabelText(/zip/i);

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();

    fireEvent.change(firstName, { target: { value: "Whyyou" }})
    fireEvent.change(lastName, { target: { value: "Wantto" }})
    fireEvent.change(address, { target: { value: "know areyou " }})
    fireEvent.change(city, { target: { value: "plotting" }})
    fireEvent.change(state, { target: { value: "OnMe" }})
    fireEvent.change(zip, { target: { value: 555777 }})

    expect(getByDisplayValue(/whyyou/i)).toBeInTheDocument()
    expect(getByDisplayValue(/wantto/i)).toBeInTheDocument()
    expect(getByDisplayValue(/know areyou/i)).toBeInTheDocument()
    expect(getByDisplayValue(/plotting/i)).toBeInTheDocument()
    expect(getByDisplayValue(/onme/i)).toBeInTheDocument()
    expect(getByDisplayValue(/555777/i)).toBeInTheDocument()

    const checkoutSubmit = getByTestId(/checkout/i);
    expect(checkoutSubmit).toBeInTheDocument();
    fireEvent.click(checkoutSubmit)

    const successMessage = getByTestId(/successMessage/i)
    expect(successMessage).toBeInTheDocument()
});

/**********make a test that fails  ************************/
