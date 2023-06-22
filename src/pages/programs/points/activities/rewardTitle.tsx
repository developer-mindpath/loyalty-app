import TextField from "../../../../components/textField";
import ValidationUtil from "../../../../utils/validation";
import { useRewardDetail } from "../../../../contexts/reawardDetail";
import { Box } from "@shopify/polaris";

const RewardTitleActivity = () => {
  const { details, handleChange } = useRewardDetail();

  return (
    <Box paddingBlockStart="6" paddingBlockEnd="0">
      <TextField
        label=""
        type="text"
        value={details!.pointRedeem?.reward_key_key_display_text}
        onChange={(value) =>
          handleChange("pointRedeem.reward_key_key_display_text")(value)
        }
        autoComplete="off"
        validation={ValidationUtil.notEmpty}
      />
    </Box>
  );
};

export default RewardTitleActivity;
