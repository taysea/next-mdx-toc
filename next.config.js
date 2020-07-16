const withPlugins = require("next-compose-plugins");
const withMdxEnhanced = require("next-mdx-enhanced");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const mdxConfig = {
  layoutPath: "./src/layouts",
  defaultLayout: true,
  scan: {
    hasSnargles: {
      pattern: /<Snargles.*.*\/>/,
    },
    snarglesName: {
      pattern: /<Snargles.*name=['"](.*)['"].*\/>/,
      transform: (arr) => [arr[1]], // Optionally get a specific value back via a function;
      // if `transform` is omitted, any and all matches will be returned in an array
    },
    headings: {
      pattern: /^#.*./gm,
      transform: (arr) => console.log(arr) || arr,
    },
  },
};

module.exports = withPlugins([
  // [
  //   withMDX,
  //   {
  //     pageExtensions: ["js", "jsx", "md", "mdx"],
  //   },
  // ],
  [withMdxEnhanced(mdxConfig)],
]);
