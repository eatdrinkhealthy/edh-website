/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import {
  shallow,
} from "enzyme";
import Support from "../Support";

describe("<Support />", function () {
  it("renders correctly", function () {
    const tree = renderer.create(<Support />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders Support Page as a div", function () {
    const wrapper = shallow(<Support />);
    expect(wrapper.type()).toEqual("div");
  });
});
