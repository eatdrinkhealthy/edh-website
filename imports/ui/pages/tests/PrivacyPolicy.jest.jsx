/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import PrivacyPolicy from "../PrivacyPolicy";

describe("<PrivacyPolicy />", function () {
  it("matches render snapshot", function () {
    const tree = renderer
      .create(
        <MemoryRouter>
          <PrivacyPolicy />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
