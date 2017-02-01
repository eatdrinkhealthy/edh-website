/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import PrivacyPolicy from "../PrivacyPolicy";

describe("<PrivacyPolicy />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<PrivacyPolicy />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    expect(PrivacyPolicy.style).toBeDefined();
    expect(JSON.stringify(PrivacyPolicy.style, null, 2)).toMatchSnapshot();
  });
});
