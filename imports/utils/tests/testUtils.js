/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import cheerio from "cheerio";
import _ from "lodash";
import {
  mount,
} from "enzyme";

/**
 * getHTMLClasses - returns an array of unique class names from provided html string
 * @params string htmlString - well formatted string of html elements
 *
 * NOTE: jquery & cheerio .attr return undefined if requested attribute not found
 * NOTE: .attr will return empty strings if there are extra spaces between values
 * NOTE: _.compact removes any empty strings
 */
export function getHTMLClasses(htmlString) {
  const $ = cheerio.load(htmlString);
  let classList = [];
  $("*").each(function () {
    const elemClasses = $(this).attr("class");
    if (elemClasses) {
      classList = _.union(classList, _.compact(elemClasses.split(" ")));
    }
  });

  return classList;
}

/**
 * getComponentClasses - returns an array of unique class names used in provided component
 * @params component currComponent - a react component
 *
 * NOTE: using mount here to ensure all child elements are fully rendered
 *       but is seems shallow might work too
 */
export function getComponentClasses(currComponent) {
  const mountedHTML = mount(currComponent).html();
  return getHTMLClasses(mountedHTML);
}

export function findStyle(stylesObj, className) {
  // finds first matching value, but classNames are unique
  const styleKey = _.findKey(stylesObj, obj => (obj.className === className));
  return stylesObj[styleKey];
}

export function formattedJSON(item) {
  return JSON.stringify(item, null, 2);
}

export function classListToJSON(stylesObj, classList) {
  const ruleObjs = classList.map(className => (findStyle(stylesObj, className)));
  return formattedJSON(ruleObjs);
}
