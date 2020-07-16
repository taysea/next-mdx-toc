import { frontMatter as introData } from "./docs/intro.mdx";
import { Anchor, Box, Text } from "grommet";
import { GenericLayout } from "../layouts/GenericLayout";
export default function Page() {
  return (
    <GenericLayout>
      <Box align="start" gap="small">
        <Text>Learn more about these instruments:</Text>
        <Anchor label="Guitar" href="/docs/guitar" />
        <Anchor label="Piano" href="/docs/piano" />
      </Box>
    </GenericLayout>
  );
}
