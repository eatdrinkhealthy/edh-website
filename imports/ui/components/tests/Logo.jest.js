/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Logo from "../Logo";
import { formattedJSON } from "../../../utils/tests/testUtils";

describe("<Logo />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    expect(shallow(<Logo />).hasClass(Logo.style.className)).toBe(true);
    expect(formattedJSON(Logo.style)).toMatchSnapshot();
  });
});
