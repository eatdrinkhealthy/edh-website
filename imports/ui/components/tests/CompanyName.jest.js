/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import renderer from "react-test-renderer";
import CompanyName from "../CompanyName";
import {
  formattedJSON,
  getAllComponentStyle,
} from "../../../utils/tests/testUtils";
import * as styles from "../../../ui/styles";

describe("<CompanyName />", function () {
  it("matches render snapshot", function () {
    const tree = renderer.create(<CompanyName />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches style / css snapshot", function () {
    const allStyle = getAllComponentStyle(<CompanyName />, styles);
    expect(formattedJSON(allStyle)).toMatchSnapshot();
  });
});
