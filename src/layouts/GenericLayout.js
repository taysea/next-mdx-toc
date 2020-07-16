import React from "react";
import { Box } from "grommet";
import { Header } from "../components/Header";

export const GenericLayout = ({ ...props }) => {
  return (
    <Box margin="auto" width={{ max: "xxlarge" }} fill>
      <Header />
      <Box fill {...props} />
    </Box>
  );
};
