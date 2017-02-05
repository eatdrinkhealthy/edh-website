/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import * as styles from "../../ui/styles";
import {
  htmlClassList,
  componentClassNameList,
  getClassNameStyleObj,
  classNamesToStyleObjList,
  notFoundStatus,
} from "./testUtils";

describe("testUtils", function () {
  describe("notFoundStatus", function () {
    it("creates a new object with a className and status property of 'not found'", function () {
      expect(notFoundStatus("thisClass")).toEqual({
        className: "thisClass",
        status: "not found",
      });
    });
  });

  describe("htmlClassList", function () {
    it("should return an empty array if provided an empty html string", function () {
      expect(htmlClassList("").length).toEqual(0);
    });

    it("should return an empty array if no classes are found", function () {
      const htmlString = `<div><h1 id="main">some text</h1><h2>Coming Soon</h2><div></div></div>`;
      expect(htmlClassList(htmlString).length).toEqual(0);
    });

    it("should find top level element classes", function () {
      const htmlString = `<div class="c1"><div>some text</div><div>Coming Soon</div></div>`;
      expect(htmlClassList(htmlString).length).toEqual(1);
    });

    it("should find deep nested classes", function () {
      const htmlString =
        `<div id="main">` +
        `<h1>some text here</h1>` +
        `<div>` +
        `<ul class="c1">` +
        `<li class="c2">item 1</li>` +
        `<ul>` +
        `<div>` +
        `<div></div>` +
        `</div>`;

      expect(htmlClassList(htmlString).length).toEqual(2);
    });

    it("should find multiple unique classes per single element", function () {
      const htmlString = `<div id="main"><h1 class="c1 c2">some text</h1></div>`;
      expect(htmlClassList(htmlString).length).toEqual(2);
    });

    it("should find multiple unique classes per single element, even with extra spaces", function () {
      let htmlString = `<div id="main"><h1 class="c1 c2 ">some text</h1></div>`;
      expect(htmlClassList(htmlString).length).toEqual(2);

      htmlString = `<div id="main"><h1 class=" c1 c2">some text</h1></div>`;
      expect(htmlClassList(htmlString).length).toEqual(2);

      htmlString = `<div id="main"><h1 class=" c1 c2 ">some text</h1></div>`;
      expect(htmlClassList(htmlString).length).toEqual(2);

      htmlString = `<div id="main"><h1 class=" c1  c2 ">some text</h1></div>`;
      expect(htmlClassList(htmlString).length).toEqual(2);
    });

    it("should not add duplicate classes", function () {
      const htmlString =
        `<div class="c1">` +
        `<div class="c2 c3">some text here</div>` +
        `<div class="c1">Coming Soon</div>` +
        `<div class="c4 c3"></div>` +
        `</div>`;

      expect(htmlClassList(htmlString).length).toEqual(4);
    });

    it("should not added duplicate classes, even if listed in same element twice", function () {
      const htmlString = `<div><h1 class="c1 c1">some text</h1></div>`;
      expect(htmlClassList(htmlString).length).toEqual(1);
    });
  });

  describe("componentClassNameList", function () {
    it("puts all unique class names of a component in an array", function () {
      const SimpleComponent = () => (
        <div className="c1">
          <h1 className="c2">Title</h1>
          <p className="c3 c1">text</p>
        </div>
      );

      expect(componentClassNameList(<SimpleComponent />).length).toEqual(3);
    });

    it("includes class names from nested components", function () {
      const NestedComponent = () => (
        <div className="c1">
          <h1 className="c4">Title</h1>
          <p className="c5 c1">text</p>
        </div>
      );

      const ComplexComponent = () => (
        <div className="c1">
          <h1 className="c2">Title</h1>
          <p className="c3 c2">text</p>
          <NestedComponent />
        </div>
      );

      expect(componentClassNameList(<ComplexComponent />).length).toEqual(5);
    });
  });

  describe("Capture Styling / CSS Rules", function () {
    describe("getClassNameStyleObj", function () {
      it("finds the style object by className", function () {
        const foundStyleObj = getClassNameStyleObj(styles.logoStyle.className, styles);
        expect(foundStyleObj).toEqual(styles.logoStyle);
      });

      it("returns a 'not found status object' if className not found", function () {
        const foundStyleObj = getClassNameStyleObj("badClassName", styles);
        expect(foundStyleObj).toEqual(notFoundStatus("badClassName"));
      });
    });

    describe("classNamesToStyleObjList", function () {
      it("creates an array of style objects", function () {
        const classNameList = [styles.logoStyle.className, styles.defaultPageStyle.className];
        const ruleObjectsList = classNamesToStyleObjList(classNameList, styles);

        expect(Array.isArray((ruleObjectsList))).toBe(true);
        expect(typeof ruleObjectsList[0]).toBe("object");

        expect(ruleObjectsList[0]).toEqual(styles.logoStyle);
        expect(ruleObjectsList[1]).toEqual(styles.defaultPageStyle);
      });

      it("includes a 'not found' status if className not found", function () {
        const classNameList = [styles.logoStyle.className, "badClassName"];
        const ruleObjectsList = classNamesToStyleObjList(classNameList, styles);

        expect(ruleObjectsList[0]).toEqual(styles.logoStyle);
        expect(ruleObjectsList[1]).toEqual(notFoundStatus("badClassName"));
      });
    });
  });
});
