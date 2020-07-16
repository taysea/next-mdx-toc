import { useCallback, useContext, useState } from "react";
import Link from "next/link";
import { Anchor, Box, Heading, ResponsiveContext, Text } from "grommet";
import { useSpring, config } from "react-spring";
import { Waypoint } from "react-waypoint";
import Gremlin from "../components/Gremlin";
import { GenericLayout } from "../layouts/GenericLayout";

export default function Page() {
  const [appear, setAppear] = useState(false);
  const size = useContext(ResponsiveContext);

  const animation = useSpring({
    transform: appear ? "translate3d(0,0,0)" : "translate3d(0,50%,0)",
    config: config.default,
  });

  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));
  const dampen = 2.75; // Lower the number the less rotation
  const onMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({
        xy: [
          (x - window.innerWidth / 2) / dampen,
          (y - window.innerHeight / 2) / dampen,
        ],
      }),
    []
  );

  return (
    <GenericLayout>
      <Box
        onMouseMove={onMove}
        height="100vh"
        pad={{ horizontal: "large", top: "large" }}
        direction={size !== "small" ? "row" : "column"}
        gap="medium"
        fill
      >
        <Box flex>
          <Heading margin="none" size="large">
            Hi there!
          </Heading>
          <Heading margin={{ bottom: "large", top: "none" }} level={2}>
            We're glad you're here.
          </Heading>
          <Box align="start" gap="small">
            <Text>Here are some topics to get you started with Grommet:</Text>
            <Link href="/docs/starting-a-project" passHref>
              <Anchor label="Starting a project" color="text" />
            </Link>
            <Link href="/docs/understanding-color" passHref>
              <Anchor label="Understanding color" color="text" />
            </Link>
            <Link href="/docs/setting-up-your-theme" passHref>
              <Anchor label="Setting up your theme" color="text" />
            </Link>
          </Box>
        </Box>
        <Box width={size !== "small" ? "50%" : "large"} justify="end">
          <Waypoint onEnter={() => !appear && setAppear(true)} />
          <Gremlin
            animation={animation}
            width="100%"
            st={st}
            xy={xy}
            alignSelf={size !== "small" ? "end" : "center"}
          />
        </Box>
      </Box>
    </GenericLayout>
  );
}
