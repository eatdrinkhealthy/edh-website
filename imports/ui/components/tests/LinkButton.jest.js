/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import LinkButton from "../LinkButton";

describe("<LinkButton />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<LinkButton text="some button text" url="some link" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    expect(shallow(<LinkButton text="" url="" />).hasClass(LinkButton.style.className)).toBe(true);
    expect(JSON.stringify(LinkButton.style, null, 2)).toMatchSnapshot();
  });
});
