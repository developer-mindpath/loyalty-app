import { Box, Checkbox } from "@shopify/polaris";
import { useRewardDetail } from "@/contexts/reawardDetail";

const Expiration = () => {
  const { details, handleChange } = useRewardDetail();

  return (
    <Box paddingBlockStart="2">
      <Checkbox
        label="Set issued rewards to expire after a certain amount of time"
        checked={details.reward_expiry === "on"}
        onChange={(value) =>
          handleChange("reward_expiry")(value ? "on" : "off")
        }
      />
    </Box>
  );
};

export default Expiration;
