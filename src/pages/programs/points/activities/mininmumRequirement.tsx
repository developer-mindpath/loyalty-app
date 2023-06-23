import { TextField, ChoiceList, Box } from "@shopify/polaris";
import { parseInt } from "lodash";
import { useRewardDetail } from "@/contexts/reawardDetail";

const MinimumRequirement = () => {
  const { details, handleChange } = useRewardDetail();

  return (
    <Box paddingBlockStart="2">
      <ChoiceList
        title={undefined}
        selected={[details.is_minimum_cart_requirement?.toString()]}
        onChange={([selected]) =>
          handleChange("is_minimum_cart_requirement")(parseInt(selected))
        }
        choices={[
          { label: "None", value: "0" },
          { label: "Minimum Cart Value", value: "1" },
        ]}
      />

      {details.is_minimum_cart_requirement === 1 && (
        <Box paddingBlockStart="4">
          <TextField
            label="Minimal Cart Value"
            value={details.minimum_cart_value?.toString()}
            prefix="$"
            type="number"
            autoComplete="off"
            onChange={(value) => handleChange("minimum_cart_value")(value)}
          />
        </Box>
      )}
    </Box>
  );
};

export default MinimumRequirement;
