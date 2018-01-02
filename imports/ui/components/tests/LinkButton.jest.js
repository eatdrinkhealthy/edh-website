/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import React from "react";
import renderer from "react-test-renderer";
import LinkButton from "../LinkButton";
import {
  formattedJSON,
  getAllComponentStyle,
} from "../../../utils/tests/testUtils";
import * as styles from "../../../ui/styles";

describe("<LinkButton />", function () {
  it("matches render snapshot", function () {
    const tree = renderer.create(<LinkButton text="some button text" url="some link" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches style / css snapshot", function () {
    const allStyle = getAllComponentStyle(<LinkButton text="button text" url="http..." />, styles);
    expect(formattedJSON(allStyle)).toMatchSnapshot();
  });
});
