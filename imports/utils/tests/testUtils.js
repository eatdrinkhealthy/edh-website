/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import cheerio from "cheerio";
import _ from "lodash";
import {
  mount,
} from "enzyme";

export function getHTMLClasses(htmlString) {
  const $ = cheerio.load(htmlString);
  let classList = [];
  $("*").each(function () {
    // NOTE: jquery & cheerio return undefined if not found, so only add if attr is defined
    const elemClasses = $(this).attr("class");
    if (elemClasses) {
      // add unique classes of any element
      //   NOTE: compact removes empty strings cause by any extra spaces in attr
      classList = _.union(classList, _.compact(elemClasses.split(" ")));
    }
  });

  return classList;
}

// NOTE: using mount here to ensure all child elements are fully rendered
//       but is seems shallow might work too
export function getComponentClasses(currComponent) {
  const mountedHTML = mount(currComponent).html();
  return getHTMLClasses(mountedHTML);
}

// NOTE: this finds the first style object with matching className
//       which should not be an issue, since glamor classNames are hashed and unique
export function findStyle(stylesObj, className) {
  const styleKey = _.findKey(stylesObj, obj => (obj.className === className));

  return stylesObj[styleKey];
}

export function classListToJSON(stylesObj, classList) {
  const ruleObjs = classList.map(className => (findStyle(stylesObj, className)));
  return JSON.stringify(ruleObjs, null, 2);
}
