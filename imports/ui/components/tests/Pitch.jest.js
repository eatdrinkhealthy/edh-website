/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Pitch from "../Pitch";

describe("<Pitch />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<Pitch />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    expect(shallow(<Pitch />).hasClass(Pitch.style.className)).toBe(true);
    expect(JSON.stringify(Pitch.style, null, 2)).toMatchSnapshot();
  });
});
