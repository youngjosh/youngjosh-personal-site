import React, { FunctionComponent } from "react";
import Home, { routing } from "./Home";

/**
 * PageRoute object
 *
 */
interface PageRoute {
  name: String;
  key: String;
  color: String;
  link: String;
}

/**
 * SitePage
 *
 */
interface SitePage {
  route: PageRoute;
  page?: FunctionComponent<any>;
}

// const PageList: Array<SitePage> = [
//   {
//     route: routing,
//     page: Home,
//   },
// ];

// export default PageList;
