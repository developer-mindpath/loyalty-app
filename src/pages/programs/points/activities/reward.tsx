import { Box, HorizontalStack } from "@shopify/polaris";
import TextField from "@/components/textField";
import ValidationUtil from "@/utils/validation";
import { useRewardDetail } from "@/contexts/reawardDetail";

const RewardActivity = () => {
  const { details, handleChange } = useRewardDetail();

  return (
    <Box paddingBlockStart="6" paddingBlockEnd="0">
      <HorizontalStack align="space-around">
        <TextField
          type="number"
          suffix="points"
          label="Points Amount"
          value={details.fixed_points_amount?.toString()}
          onChange={(value) => handleChange("fixed_points_amount")(value)}
          autoComplete="off"
          validation={ValidationUtil.notEmpty}
        />
        <TextField
          label="Discount"
          prefix="$"
          type="number"
          value={details.fixed_points_discount?.toString()}
          onChange={(value) => handleChange("fixed_points_discount")(value)}
          autoComplete="off"
          validation={ValidationUtil.notEmpty}
        />
      </HorizontalStack>
    </Box>
  );
};

export default RewardActivity;
