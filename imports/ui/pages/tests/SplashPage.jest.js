/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import SplashPage from "../SplashPage";
import { formattedJSON, getAllComponentStyle } from "../../../utils/tests/testUtils";
import * as styles from "../../../ui/styles";

describe("<SplashPage />", function () {
  it("matches render snapshot", function () {
    const tree = renderer.create(<SplashPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches style / css snapshot", function () {
    const allStyle = getAllComponentStyle(<SplashPage />, styles);
    expect(formattedJSON(allStyle)).toMatchSnapshot();
  });

  it("contains sections company name, pitch, logo, preview ", function () {
    const wrapper = shallow(<SplashPage />);
    expect(wrapper.find("CompanyName").length).toEqual(1);
    expect(wrapper.find("Pitch").length).toEqual(1);
    expect(wrapper.find("Logo").length).toEqual(1);
  });
});
