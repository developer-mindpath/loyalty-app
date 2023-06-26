import { Box, Checkbox } from "@shopify/polaris";
import { useRewardDetail } from "@/contexts/reawardDetail";

const Expiration = () => {
  const { details, handleChange } = useRewardDetail();

  return (
    <Box paddingBlockStart="2">
      <Checkbox
        label="Set issued rewards to expire after a certain amount of time"
        checked={details.reward_expiry === 0}
        onChange={(value) => handleChange("reward_expiry")(value ? 0 : 1)}
      />
    </Box>
  );
};

export default Expiration;
