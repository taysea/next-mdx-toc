import React from "react";
import { Box } from "grommet";
import { Header } from "../components/Header";

export const GenericLayout = ({ ...props }) => {
  return (
    <Box fill>
      <Header />
      <Box pad="medium" {...props} />
    </Box>
  );
};
