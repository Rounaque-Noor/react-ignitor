import { sum } from "../sum"

test("Sum fn to test sum of two numbers", () => {

    const result = sum(3,4);
    expect(result).toBe(7); //Assertion

})