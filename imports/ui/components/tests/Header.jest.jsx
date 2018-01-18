/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import React from "react";
import renderer from "react-test-renderer";
import Header from "../Header";

describe("<Header />", () => {
  it("should match render snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
