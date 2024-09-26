import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";
import Restaurant from "../Restaurant";
import MOCK_DATA from "../mocks/resMockData.json"

it('should render Restaurant Card component', () => {
    render(
    <BrowserRouter>
        <Restaurant resData={MOCK_DATA} />
    </BrowserRouter>
    );
    const name = screen.getByText("Shiraz Golden Restaurant");
    expect(name).toBeInTheDocument();
 });