import React from "react";
import { MDXProvider } from "@mdx-js/react";
import PropTypes from "prop-types";
import { grommet, Grommet, Heading } from "grommet";
import components from "../components/MDXComponents";
// import { components } from "../components";

/* _app.js allows for customizing Next.js's default <App> component
 * Details: https://nextjs.org/docs/advanced-features/custom-app
 *
 * The `Component` prop is the active `page`, so whenever you
 * navigate between routes, `Component` will change to the new `page`.
 */
function App({ Component, pageProps }) {
  // for all other pages, we build the page with Layout in the .js file
  return (
    <Grommet theme={grommet} full>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Grommet>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape({}),
  router: PropTypes.shape({
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
