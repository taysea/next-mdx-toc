import React from "react";
import { Button, Header, Text } from "grommet";
import { Github } from "grommet-icons";
const PageHeader = () => {
  return (
    <Header
      background="light-3"
      pad={{ horizontal: "medium", vertical: "medium" }}
    >
      <Button href="/">
        <Text weight="bold" size="xlarge" color="navy">
          Instruments.com
        </Text>
      </Button>
      <Button icon={<Github />} />
    </Header>
  );
};

export { PageHeader as Header };
