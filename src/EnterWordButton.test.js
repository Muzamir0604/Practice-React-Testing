import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import EnterWordButton from "./EnterWordButton";


const defaultProps = {display: true}


const setup =(props = {})=>{
    const setupProps = {...defaultProps, ...props};
    return shallow(<EnterWordButton {...setupProps}/>)
}

describe("render",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup();
    })
    test('render with no error',()=>{
        const component =  findByTestAttr(wrapper,"component-enter-word-button");
        expect(component.length).toBe(1);
    });
    test('renders no text when `display` prop is false',()=>{
        wrapper = setup({display:false});
        const component =  findByTestAttr(wrapper,"component-enter-word-button");
        expect(component.text()).toBe("");
    });
    test('renders non-empty text when `display`prop is true',()=>{
        wrapper = setup({display:true});
        const component =  findByTestAttr(wrapper,"component-enter-word-button");
        expect(component.text()).not.toBe("");
    });
    test('does not throw warning with expected props',()=>{
        const expectedProps = { display: false };
        checkProps(EnterWordButton, expectedProps);
    });
    
});
test('Calls button action prop upon click',()=>{
    // create a mock function so we can see whether it's called on click
    const buttonActionMock = jest.fn();
    const wrapper = setup({display:true, buttonAction:buttonActionMock});

    const resetButton =  findByTestAttr(wrapper, "component-enter-word-button");
    resetButton.simulate('click')

    expect(buttonActionMock).toHaveBeenCalledTimes(1)
});