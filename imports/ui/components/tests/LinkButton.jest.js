/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import LinkButton from "../LinkButton";
import { linkButtonStyle } from "../../styles";

describe("<LinkButton />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<LinkButton text="some button text" url="some link" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    // TODO - consider / investigate alternate manner for capturing css values
    //     window.getComputedStyle?  use a different renderer? dig through glamor test code?
    const styleJSON = JSON.stringify(linkButtonStyle.rules, null, 2);
    expect(styleJSON).toMatchSnapshot();
  });
});
