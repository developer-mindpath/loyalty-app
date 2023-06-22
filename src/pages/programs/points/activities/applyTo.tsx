import { Box, ChoiceList, Select } from "@shopify/polaris";
import { useRewardDetail } from "../../../../contexts/reawardDetail";

const ApplyTo = () => {
  const { details, handleChange } = useRewardDetail();

  return (
    <Box paddingBlockStart="2">
      <ChoiceList
        selected={[details.apply_to]}
        onChange={([selected]) => handleChange("apply_to")(selected)}
        choices={[
          { label: "Entire Order", value: "entire_order" },
          { label: "Choose Collection", value: "collection" },
        ]}
        title={undefined}
      />
      {/* TODO: Load options from API */}
      {details?.apply_to === "collection" && (
        <Box paddingBlockStart="4">
          <Select label="Collection" options={["Need Data from API"]} />
        </Box>
      )}
    </Box>
  );
};

export default ApplyTo;
