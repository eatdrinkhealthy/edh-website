/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from "react";
import {
  render,
  findDOMNode,
  unmountComponentAtNode,
} from "react-dom";
import ReactTestUtils from "react-addons-test-utils";
import {
  shallow,
  mount,
  render as staticRender,
} from "enzyme";
import renderer from "react-test-renderer";
import SplashPage from "../SplashPage";
import { comingSoonStyle } from "../../styles";
import { getComponentClasses } from "../../../utils/testUtils";

describe("<SplashPage />", function () {
  it("render matches snapshot", function () {
    const tree = renderer.create(<SplashPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("css matches snapshot", function () {
    expect(shallow(<SplashPage />).hasClass(SplashPage.style.className)).toBe(true);
    expect(JSON.stringify(SplashPage.style, null, 2)).toMatchSnapshot();
  });

  it.skip("document practice", function () {
    document.body.innerHTML =
      `<div>` +
      `<div id="renderSpot" />` +
      `</div>`;

    render(<h1 style={{ color: 'blue' }} className={SplashPage.style.className}>Try
      me.</h1>, document.getElementById("renderSpot"));
    console.log(document.body.innerHTML);
  });

  it.skip("mount practice", function () {
    // const wrapper = mount(<h1 style={{color: "purple"}} myProp1="my prop!">This test stuff.</h1>);
    const wrapper = mount(<h1 className={comingSoonStyle.className}>This test stuff.</h1>);
    // const domNode = findDOMNode(wrapper.node);
    console.log("document body:", document.head);
  });

  it("lists component and children classes", function () {
    const classList = getComponentClasses(<SplashPage className="onemore" prop1="testbadprop" />);
    console.log("class list:", classList);
  });

  it.skip("practice with static render (cheerio wrapper)", function () {
    const wrapper = staticRender(<SplashPage />);
    console.log("static render:", wrapper['0'].children);
  });

  it.skip("test utils practice", function () {
    // const wrapper = ReactTestUtils.renderIntoDocument(<h1 className={comingSoonStyle.className}>This test stuff.</h1>);
    const wrapper = ReactTestUtils.renderIntoDocument(<div><h1 className="Bortz">This test stuff.</h1><h2
      className="Neil">Neil is here.</h2></div>);
    // const wrapper = ReactTestUtils.renderIntoDocument(<SplashPage />);
    console.log("rendered:", wrapper);
    console.log("document head:", document.head);
  });

  it("contains sections company name, pitch, coming soon, logo, preview ", function () {
    const wrapper = shallow(<SplashPage />);
    expect(wrapper.find("CompanyName").length).toEqual(1);
    expect(wrapper.find("Pitch").length).toEqual(1);
    expect(wrapper.find("ComingSoon").length).toEqual(1);
    expect(wrapper.find("Logo").length).toEqual(1);
  });
});
