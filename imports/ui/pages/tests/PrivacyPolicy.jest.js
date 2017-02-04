/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import PrivacyPolicy from "../PrivacyPolicy";
import { formattedJSON } from "../../../utils/tests/testUtils";

describe("<PrivacyPolicy />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<PrivacyPolicy />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    expect(shallow(<PrivacyPolicy />).hasClass(PrivacyPolicy.style.className)).toBe(true);
    expect(formattedJSON(PrivacyPolicy.style)).toMatchSnapshot();
  });
});
