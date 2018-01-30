/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import SplashPage from "../SplashPage";
import appReducer from "../../../state/reducers";

describe("<SplashPage />", function () {
  const testStore = createStore(appReducer);

  it("matches render snapshot", function () {
    const tree = renderer
      .create(
        <Provider store={testStore}>
          <MemoryRouter>
            <SplashPage />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("contains sections header, main, footer", function () {
    const wrapper = shallow(<SplashPage />);
    expect(wrapper.find("Header").length).toEqual(1);
    expect(wrapper.find("Main").length).toEqual(1);
    expect(wrapper.find("Footer").length).toEqual(1);
  });
});
