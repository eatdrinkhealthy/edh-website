/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import renderer from "react-test-renderer";
import Logo from "../Logo";
import {
  formattedJSON,
  getAllComponentStyle,
} from "../../../utils/tests/testUtils";
import * as styles from "../../../ui/styles";

describe("<Logo />", function () {
  it("matches render snapshot", function () {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches css snapshot", function () {
    const allStyle = getAllComponentStyle(<Logo />, styles);
    expect(formattedJSON(allStyle)).toMatchSnapshot();
  });
});
