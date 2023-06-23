import { Text } from "@shopify/polaris";
import TextField from "@/components/textField";
import ValidationUtil from "@/utils/validation";
import { usePointDetail } from "@/contexts/pointsDetail";

const ProgramPointAmount = () => {
  const { details, handleChange } = usePointDetail();

  return (
    <TextField
      label="Points Amount"
      type="number"
      value={details?.points_amounts?.toString()}
      placeholder="100"
      onChange={(value) => handleChange("points_amounts")(value)}
      autoComplete="off"
      suffix={
        <Text variant="bodyMd" alignment="center" as={"h1"}>
          Points
        </Text>
      }
      validation={ValidationUtil.number}
    />
  );
};

export default ProgramPointAmount;
