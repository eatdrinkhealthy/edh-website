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
    expect(wrapper.find("CompanyName").length).toEqual(1);
    expect(wrapper.find("Pitch").length).toEqual(1);
    expect(wrapper.find("ComingSoon").length).toEqual(1);
    expect(wrapper.find("Logo").length).toEqual(1);
    expect(wrapper.find("Preview").length).toEqual(1);
  });
});
