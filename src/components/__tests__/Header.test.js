import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/redux-toolkit/appStore";

it('should render Header component', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByRole("button", {name: 'Login'});
    expect(button).toBeInTheDocument();
 });

 it('should show cart item no', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartNo = screen.getByText("Cart (0)");
    expect(cartNo).toBeInTheDocument();
 });
