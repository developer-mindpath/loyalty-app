import { Box, ChoiceList } from "@shopify/polaris";
import { useRewardDetail } from "../../../../contexts/reawardDetail";

const PurchaseType = () => {
  const { details, handleChange } = useRewardDetail();
  return (
    <Box paddingBlockStart="2">
      <ChoiceList
        title={undefined}
        selected={[details.purchase_type]}
        onChange={([selected]) => handleChange("purchase_type")(selected)}
        choices={[
          { label: "One-time Purchase", value: "one-time" },
          { label: "Subscription", value: "subscription" },
          { label: "Both", value: "both" },
        ]}
      />
    </Box>
  );
};

export default PurchaseType;
