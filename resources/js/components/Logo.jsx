import { Container, useComputedColorScheme, Image } from "@mantine/core";
import { IconChartArcs } from "@tabler/icons-react";

export default function Logo(props) {
  const computedColorScheme = useComputedColorScheme();

  return (
    <Container p={16}>
      <Image h={32} src="assets/redbean-wordmark/rb-wm-svg-red.svg" />
    </Container>
  );
}
