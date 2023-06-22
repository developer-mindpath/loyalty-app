import { useRewardDetail } from "../../../../contexts/reawardDetail";
import { Box, ChoiceList } from "@shopify/polaris";

const RewardPointTypeActivity = () => {
  const { details, handleChange } = useRewardDetail();

  const onChange = ([selected]: string[]) => {
    handleChange("points_type")(selected);
  };

  return (
    <Box paddingBlockStart="6" paddingBlockEnd="0">
      <ChoiceList
        title=""
        selected={[details.points_type]}
        onChange={onChange}
        choices={[
          { label: "Hidden", value: "hidden" },
          { label: "Optional", value: "optional" },
          { label: "Required", value: "required" },
        ]}
      />
    </Box>
  );
};

export default RewardPointTypeActivity;
