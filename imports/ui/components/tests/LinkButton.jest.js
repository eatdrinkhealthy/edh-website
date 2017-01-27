/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import {
  shallow,
} from "enzyme";
import LinkButton from "../LinkButton";

describe("<LinkButton />", function () {
  it("renders correctly", function () {
    const tree = renderer.create(<LinkButton text="some button text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders an anchor in a div", function () {
    const buttonText = "My Link Button";

    const wrapper = shallow(<LinkButton text={buttonText} />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.find("a").text()).toBe(buttonText);
    // TODO - determine method to use hasClass when using glamor
    //         (glamor sets className to an object, not a string)
    // expect(wrapper.find("a").hasClass("linkButton")).toBe(true);
  });
});
