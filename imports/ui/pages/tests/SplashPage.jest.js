/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import {
  shallow,
} from "enzyme";
import renderer from "react-test-renderer";
import SplashPage from "../SplashPage";
import { getComponentClasses, formattedJSON } from "../../../utils/tests/testUtils";

describe("<SplashPage />", function () {
  it("matches render snapshot", function () {
    const tree = renderer.create(<SplashPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches css snapshot", function () {
    // TODO complete getting classes to snapshot
    const classList = getComponentClasses(<SplashPage />);
    expect(formattedJSON(classList)).toMatchSnapshot();
  });

  it("contains sections company name, pitch, coming soon, logo, preview ", function () {
    const wrapper = shallow(<SplashPage />);
    expect(wrapper.find("CompanyName").length).toEqual(1);
    expect(wrapper.find("Pitch").length).toEqual(1);
    expect(wrapper.find("ComingSoon").length).toEqual(1);
    expect(wrapper.find("Logo").length).toEqual(1);
  });
});
