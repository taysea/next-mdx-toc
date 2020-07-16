import React from "react";
import { Button, Header, Text } from "grommet";
import { Github } from "grommet-icons";
const PageHeader = () => {
  return (
    <Header
      background="accent-4"
      pad={{ horizontal: "large", vertical: "medium" }}
    >
      <Button href="/">
        <Text weight="bold" size="xlarge" color="text">
          Grommet Guides
        </Text>
      </Button>
      <Button icon={<Github />} />
    </Header>
  );
};

export { PageHeader as Header };
