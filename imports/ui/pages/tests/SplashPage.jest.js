/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import SplashPage from "../SplashPage";

describe("<SplashPage />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<SplashPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    expect(JSON.stringify(SplashPage.style, null, 2)).toMatchSnapshot();
  });
});
