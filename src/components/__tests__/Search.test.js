import Body from "../Body"
import { fireEvent, render, screen } from "@testing-library/react";
import MOCKRES_DATA from "../mocks/mockRestaurantData.json"
import {jest} from '@jest/globals'
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom"
import Restaurant from "../Restaurant";
import MOCK_DATA from "../mocks/resMockData.json"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCKRES_DATA)
        }
    })
})
test('should load Body Comp and search for burger', async() => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
            <Restaurant resData={MOCK_DATA} />
        </BrowserRouter>
    ));
    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value : "burger"}})
    fireEvent.click(searchBtn);

    const card = screen.getAllByTestId("resCard");

    expect(card.length).toBe(2); //Assertion

    
 })