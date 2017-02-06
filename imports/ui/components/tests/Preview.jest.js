/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import renderer from "react-test-renderer";
import Preview from "../Preview";
import {
  formattedJSON,
  getAllComponentStyle,
} from "../../../utils/tests/testUtils";
import * as styles from "../../../ui/styles";

describe("<Preview />", function () {
  it("matches render snapshot", function () {
    const tree = renderer.create(<Preview />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches style / css snapshot", function () {
    const allStyle = getAllComponentStyle(<Preview />, styles);
    expect(formattedJSON(allStyle)).toMatchSnapshot();
  });
});
