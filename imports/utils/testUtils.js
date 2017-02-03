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

export function getComponentClasses(currComponent) {
  // NOTE: using mount here to ensure all child elements are fully rendered
  //       but is seems shallow might work too
  const mountedHTML = mount(currComponent).html();
  console.log("component html:", mountedHTML);
  return getHTMLClasses(mountedHTML);
}
