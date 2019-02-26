import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Buttons from '../Buttons';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
    shallow(<Buttons />);
});

test("check if we have a decrement button", () => {
    const wrapper = shallow(<Buttons />);
    const decrementButton = wrapper.find(`[test='decrementButton']`)

    expect(decrementButton.hasClass('red')).toEqual(true)
    expect(decrementButton.text()).toEqual('Decrement')
});

test("check if we have a increment button", () => {
    const wrapper = shallow(<Buttons />);
    const incrementButton = wrapper.find(`[test='incrementButton']`)

    expect(incrementButton.hasClass('green')).toEqual(true)
    expect(incrementButton.text()).toEqual('Increment')
});