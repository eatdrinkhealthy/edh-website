/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import renderer from "react-test-renderer";
import {
  shallow,
} from "enzyme";
import ComingSoon from "../ComingSoon";
import { formattedJSON } from "../../../utils/tests/testUtils";

describe("<ComingSoon />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<ComingSoon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    // informative when doing TDD (provides useful messaging before snapshot is finalized)
    expect(shallow(<ComingSoon />).hasClass(ComingSoon.style.className)).toBe(true);

    // checking snapshot
    expect(formattedJSON(ComingSoon.style)).toMatchSnapshot();
  });
});
