import { render, screen } from "@testing-library/react"
import About from "../About"
import "@testing-library/jest-dom"

test('should render About component', () => {
    render(<About/>);
    const heading = screen.getAllByRole("heading");
    expect(heading.length).toBe(2);
 });

 it('should render About component', () => {
    render(<About/>);
    const headingTxt = screen.getByText("About Us");
    expect(headingTxt).toBeInTheDocument();
 });

 //To group some test cases
 describe("About Us test cases", () => {
    it('should render About component', () => {
        render(<About/>);
        const headingTxt = screen.getByText("About Us");
        expect(headingTxt).toBeInTheDocument();
     });
     it('should render About component', () => {
        render(<About/>);
        const headingTxt2 = screen.getByText("This is React Ignitor");
        expect(headingTxt2).toBeInTheDocument();
     });
 })
