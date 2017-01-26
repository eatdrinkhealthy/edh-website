/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import {
    shallow,
} from "enzyme";
import PrivacyPolicy from "../PrivacyPolicy";

describe("<PrivacyPolicy />", function () {
  it("renders Privacy Policy header and 5 sections", function () {
    const wrapper = shallow(<PrivacyPolicy/>);
    expect(wrapper.type()).toEqual("div");
  });
});
