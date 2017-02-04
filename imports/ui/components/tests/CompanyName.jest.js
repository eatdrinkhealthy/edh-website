/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CompanyName from "../CompanyName";
import { formattedJSON } from "../../../utils/tests/testUtils";

describe("<CompanyName />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<CompanyName />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    expect(shallow(<CompanyName />).hasClass(CompanyName.style.className)).toBe(true);
    expect(formattedJSON(CompanyName.style)).toMatchSnapshot();
  });
});
