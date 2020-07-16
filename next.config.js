const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "./src/layouts",
  defaultLayout: true,
  scan: {
    headings: {
      pattern: /^#.*./gm,
      transform: (arr) => arr,
    },
  },
})();
