/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import renderer from "react-test-renderer";
import ComingSoon from "../ComingSoon";
import {
  formattedJSON,
  getAllComponentStyle,
} from "../../../utils/tests/testUtils";
import * as styles from "../../../ui/styles";

describe("<ComingSoon />", function () {
  it("matches render snapshot", function () {
    const tree = renderer.create(<ComingSoon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches style / css snapshot", function () {
    const allStyle = getAllComponentStyle(<ComingSoon />, styles);
    expect(formattedJSON(allStyle)).toMatchSnapshot();
  });
});
