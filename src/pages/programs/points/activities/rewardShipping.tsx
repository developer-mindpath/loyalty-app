import { memo } from "react";
import { Box, Checkbox } from "@shopify/polaris";
import TextField from "@/components/textField";
import RewardDetailProvider, {
  useRewardDetail,
} from "@/contexts/reawardDetail";
import ValidationUtil from "@/utils/validation";

const ReawardShipping = () => {
  const { details, handleChange } = useRewardDetail();

  return (
    <>
      <TextField
        type="number"
        suffix="points"
        autoComplete="off"
        validation={ValidationUtil.notEmpty}
        label="Customer Redeems increment of"
        value={details?.incremented_points_amount?.toString()}
        onChange={(value) => handleChange("incremented_points_amount")(value)}
      />
      <Box paddingBlockStart="4">
        <Checkbox
          checked={details?.incremented_points_is_set_maximum_points === 1}
          label="Set a Maximum amount of points required to redeem this reward"
          onChange={(selected) =>
            handleChange("incremented_points_is_set_maximum_points")(
              selected ? 1 : 0
            )
          }
        />
        <Box paddingBlockStart="2">
          <TextField
            label=""
            labelHidden
            autoComplete="off"
            value={details?.apply_to_maximum_shipping_amount?.toString()}
            onChange={(value) =>
              handleChange("apply_to_maximum_shipping_amount")(value)
            }
          />
        </Box>
      </Box>
    </>
  );
};

const component = () => (
  <RewardDetailProvider>
    <ReawardShipping />
  </RewardDetailProvider>
);

export default memo(component);
