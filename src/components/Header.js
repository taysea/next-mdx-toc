import React from "react";
import { Box, Button, Header, Text } from "grommet";
import { Github } from "grommet-icons";
const PageHeader = () => {
  return (
    <Header pad={{ horizontal: "large", vertical: "medium" }}>
      <Button href="/">
        <Text weight="bold" size="xlarge" color="text">
          Grommet Guides
        </Text>
      </Button>
      <Button
        href="https://github.com/taysea/next-mdx-toc"
        target="_blank"
        rel="noopener"
        icon={<Github />}
      />
    </Header>
  );
};

export { PageHeader as Header };
