/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import React from "react";
import renderer from "react-test-renderer";
import Pitch from "../Pitch";
import {
  formattedJSON,
  getAllComponentStyle,
} from "../../../utils/tests/testUtils";
import * as styles from "../../../ui/styles";

describe("<Pitch />", function () {
  it("matches render snapshot", function () {
    const tree = renderer.create(<Pitch />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches style / css snapshot", function () {
    const allStyle = getAllComponentStyle(<Pitch />, styles);
    expect(formattedJSON(allStyle)).toMatchSnapshot();
  });
});
