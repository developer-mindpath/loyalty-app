import { Box, Divider } from "@shopify/polaris";
import { useMemo } from "react";

interface ISectionDivider {
  dense?: boolean;
}

const SectionDivider = (props: ISectionDivider) => {
  const { dense = false } = props;
  const padding = useMemo(() => {
    if (dense) return "4";
    return "6";
  }, [dense]);

  return (
    <Box paddingBlockEnd={padding} paddingBlockStart={padding}>
      <Divider />
    </Box>
  );
};

export default SectionDivider;
