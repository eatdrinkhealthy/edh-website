/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Support from "../Support";
import { formattedJSON } from "../../../utils/tests/testUtils";

describe("<Support />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<Support />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    expect(shallow(<Support />).hasClass(Support.style.className)).toBe(true);
    expect(formattedJSON(Support.style)).toMatchSnapshot();
  });
});
