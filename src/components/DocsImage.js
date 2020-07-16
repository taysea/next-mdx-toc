import React from "react";
import { Box, Image } from "grommet";

export const DocsImage = ({ a11yTitle, src, ...rest }) => {
  return (
    <Box height="medium" width={{ max: "medium" }} {...rest}>
      <Image a11yTitle={a11yTitle} src={src} fit="cover" />
    </Box>
  );
};
