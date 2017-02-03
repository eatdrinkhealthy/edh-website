/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import { getHTMLClasses } from "../testUtils";

describe("testUtils", function () {
  describe("getHTMLClasses", function () {
    it("should return an empty array if provided an empty html string", function () {
      expect(getHTMLClasses("").length).toEqual(0);
    });

    it("should return an empty array if no classes are found", function () {
      const htmlString = `<div><h1 id="main">some text</h1><h2>Coming Soon</h2><div></div></div>`;
      expect(getHTMLClasses(htmlString).length).toEqual(0);
    });

    it("should find top level element classes", function () {
      const htmlString = `<div class="c1"><div>some text</div><div>Coming Soon</div></div>`;
      expect(getHTMLClasses(htmlString).length).toEqual(1);
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

      expect(getHTMLClasses(htmlString).length).toEqual(2);
    });

    it("should find multiple unique classes per single element", function () {
      const htmlString = `<div id="main"><h1 class="c1 c2">some text</h1></div>`;
      expect(getHTMLClasses(htmlString).length).toEqual(2);
    });

    it("should find multiple unique classes per single element, even with extra spaces", function () {
      let htmlString = `<div id="main"><h1 class="c1 c2 ">some text</h1></div>`;
      expect(getHTMLClasses(htmlString).length).toEqual(2);

      htmlString = `<div id="main"><h1 class=" c1 c2">some text</h1></div>`;
      expect(getHTMLClasses(htmlString).length).toEqual(2);

      htmlString = `<div id="main"><h1 class=" c1 c2 ">some text</h1></div>`;
      expect(getHTMLClasses(htmlString).length).toEqual(2);

      htmlString = `<div id="main"><h1 class=" c1  c2 ">some text</h1></div>`;
      expect(getHTMLClasses(htmlString).length).toEqual(2);
    });

    it("should not add duplicate classes", function () {
      const htmlString =
        `<div class="c1">` +
        `<div class="c2 c3">some text here</div>` +
        `<div class="c1">Coming Soon</div>` +
        `<div class="c4 c3"></div>` +
        `</div>`;

      expect(getHTMLClasses(htmlString).length).toEqual(4);
    });

    it("should not added duplicate classes, even if listed in same element twice", function () {
      const htmlString = `<div><h1 class="c1 c1">some text</h1></div>`;
      expect(getHTMLClasses(htmlString).length).toEqual(1);
    });
  });

  describe("getComponentClasses", function () {

  });
});
