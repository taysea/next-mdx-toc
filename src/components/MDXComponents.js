import { Anchor, Box, Image, Heading } from "grommet";
import SubsectionHeader from "./SubsectionHeader";

const components = {
  a: Anchor,
  img: (props) => (
    <Box width="100%" height="medium">
      <Image fit="cover" {...props} />
    </Box>
  ),
  h1: (props) => <Heading margin="none" {...props} />,
  h2: (props) => <SubsectionHeader level={2} {...props} />,
  h3: (props) => <SubsectionHeader level={3} {...props} />,
};

export default components;
