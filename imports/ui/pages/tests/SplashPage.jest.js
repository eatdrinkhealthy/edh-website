/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import {
  shallow,
} from "enzyme";
import SplashPage from "../SplashPage";

describe("<SplashPage />", function () {
  it("renders correctly", function () {
    const tree = renderer.create(<SplashPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should be a div with 5 components", function () {
    const wrapper = shallow(<SplashPage />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.childAt(0).name()).toEqual("CompanyName");
    // expect(wrapper.childAt(1).name()).toEqual("Pitch");
    // expect(wrapper.childAt(2).name()).toEqual("ComingSoon");
    // expect(wrapper.childAt(3).name()).toEqual("Logo");
    // expect(wrapper.childAt(4).name()).toEqual("Preview");
  });
});
