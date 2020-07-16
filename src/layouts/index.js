import { useContext } from "react";
import { Anchor, Box, Heading, ResponsiveContext, Sidebar } from "grommet";
import { Link } from "next/link";
import { formatName } from "../utils";
import { Header } from "../components/Header";

export default (frontMatter) => {
  const __scans = frontMatter.__scans;
  return function docsPageLayout({ children }) {
    const size = useContext(ResponsiveContext);
    return (
      <Box>
        <Header />
        <Box
          direction="row"
          width={{ max: "xxlarge" }}
          pad={{ horizontal: "medium" }}
        >
          <Box flex overflow="auto">
            <Heading level={1}>{frontMatter.title}</Heading>
            <Box width={{ max: "large" }}>{children}</Box>
          </Box>
          {size !== "small" && (
            <Sidebar
              flex={false}
              /* Min height is not needed in mobile contexts */
              height={{ min: "100%" }}
              pad={{ horizontal: "medium", top: "large" }}
              round="xsmall"
            >
              <Box gap="small">
                {__scans.headings &&
                  __scans.headings.map((heading, index) => {
                    const formattedHeading = heading.replace(/^#+\s/g, "");
                    return (
                      // <Link>
                      <Anchor
                        key={index}
                        label={formattedHeading}
                        href={`#${formatName(formattedHeading)}`}
                        color="#000"
                        size="small"
                      />
                      // </Link>
                    );
                  })}
              </Box>
            </Sidebar>
          )}
        </Box>
      </Box>
    );
  };
};
