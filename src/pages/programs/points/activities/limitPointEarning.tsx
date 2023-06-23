import { memo, useMemo } from "react";
import { Box, Checkbox, Select } from "@shopify/polaris";
import TextField from "@/components/textField";
import { usePointDetail } from "@/contexts/pointsDetail";

const LimitPointEarning = () => {
  const { details, handleChange } = usePointDetail();
  const isEnabled = useMemo(() => {
    return details?.limit_count_enabled === 0 ? false : true;
  }, [details?.limit_count_enabled]);

  return (
    <>
      <Box paddingBlockStart="4" paddingBlockEnd="2">
        <Checkbox
          label="Limit how many times each customer can earn points for completing this action"
          checked={isEnabled}
          onChange={(newChecked: boolean) =>
            handleChange("limit_count_enabled")(newChecked ? 1 : 0)
          }
        />
      </Box>

      <div
        style={{
          display: isEnabled ? "block" : "none",
        }}
      >
        <Box paddingBlockStart="2" paddingBlockEnd="2">
          <TextField
            label=""
            type="number"
            value={details?.limit_count?.toString()}
            placeholder="10"
            onChange={(value) => handleChange("limit_count")(value)}
            autoComplete="off"
            connectedRight={
              <Select
                label=""
                options={["hour", "day", "week"]}
                value={details?.limit_count_type?.toString()}
                onChange={(value) => handleChange("limit_count_type")(value)}
              />
            }
          />
        </Box>
      </div>
    </>
  );
};

export default memo(LimitPointEarning);
