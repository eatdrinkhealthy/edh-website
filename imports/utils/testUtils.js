/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import cheerio from "cheerio";
import _ from "lodash";
import {
  mount,
} from "enzyme";

export function getComponentClasses(currComponent) {
  // NOTE: using mount here to ensure all child elements are fully rendered
  //       but is seems shallow might work too
  const mountedHTML = mount(currComponent).html();
  console.log("html:", mountedHTML);

  const $ = cheerio.load(mountedHTML);
  let classList = [];
  $("*").each(function () {
    // add new unique classes of any element
    classList = _.union(classList, $(this).attr("class").split(" "));
  });
  return classList;
}
