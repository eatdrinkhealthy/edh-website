/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Logo from "../Logo";

describe("<Logo />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    expect(shallow(<Logo />).hasClass(Logo.style.className)).toBe(true);
    expect(JSON.stringify(Logo.style, null, 2)).toMatchSnapshot();
  });
});
