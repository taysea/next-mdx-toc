import { useContext } from "react";
import Link from "next/link";
import { Anchor, Box, Heading, ResponsiveContext, Sidebar } from "grommet";
import { formatName } from "../utils";
import { Header } from "../components/Header";

export default (frontMatter) => {
  const __scans = frontMatter.__scans;
  return function docsPageLayout({ children }) {
    const size = useContext(ResponsiveContext);
    return (
      <Box margin="auto" width={{ max: "xxlarge" }}>
        <Header />
        <Box direction="row" pad={{ horizontal: "large" }}>
          <Box flex overflow="auto" pad={{ right: "medium" }}>
            <Heading level={1}>{frontMatter.title}</Heading>
            <Box width={{ max: "large" }}>{children}</Box>
          </Box>
          {size !== "small" && (
            <Sidebar
              flex={false}
              /* Min height is not needed in mobile contexts */
              height={{ min: "100%" }}
              pad={{ top: "large" }}
            >
              <Box align="start" gap="small">
                {__scans.headings &&
                  __scans.headings.map((heading, index) => {
                    const formattedHeading = heading.replace(/^#+\s/g, "");
                    return (
                      <Link
                        key={index}
                        href={`#${formatName(formattedHeading)}`}
                        passHref
                      >
                        <Anchor
                          label={formattedHeading}
                          color="#000"
                          size="small"
                        />
                      </Link>
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
