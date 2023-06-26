import { useRewardDetail } from "@/contexts/reawardDetail";
import { Box, ChoiceList } from "@shopify/polaris";

const RewardPointTypeActivity = () => {
  const { details, handleChange } = useRewardDetail();

  const onChange = ([selected]: string[]) => {
    handleChange("points_type")(selected);
  };

  return (
    <Box paddingBlockStart="4">
      <ChoiceList
        title={undefined}
        selected={[details.points_type]}
        onChange={onChange}
        choices={[
          { label: "Fixed amount of points", value: "fixed" },
          { label: "Incremeneted points", value: "incremeneted" },
        ]}
      />
    </Box>
  );
};

export default RewardPointTypeActivity;
