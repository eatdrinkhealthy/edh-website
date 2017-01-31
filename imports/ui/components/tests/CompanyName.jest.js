/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import CompanyName from "../CompanyName";

describe("<CompanyName />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<CompanyName />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    expect(JSON.stringify(CompanyName.style, null, 2)).toMatchSnapshot();
  });
});
