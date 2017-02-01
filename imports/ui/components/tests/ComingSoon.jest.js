/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import {
  shallow,
} from "enzyme";
import ComingSoon from "../ComingSoon";

describe("<ComingSoon />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<ComingSoon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    // informative when doing TDD (provides useful messaging before snapshot is finalized)
    expect(shallow(<ComingSoon />).hasClass(ComingSoon.style.className)).toBe(true);

    // checking snapshot
    expect(JSON.stringify(ComingSoon.style, null, 2)).toMatchSnapshot();
  });
});
