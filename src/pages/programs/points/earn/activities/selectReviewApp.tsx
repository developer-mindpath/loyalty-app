import { memo, useCallback, useEffect, useState } from "react";
import { Select } from "@shopify/polaris";
import { ProgramService } from "../../../../../service/programService";
import { usePointDetail } from "../../../../../contexts/pointsDetail";
import { IAppListItem } from "../../../../../types/program";

const SelectReviewApp = () => {
  const { details, handleChange } = usePointDetail();
  const [options, setOptions] = useState<IAppListItem[]>([
    {
      id: 0,
      app_title: "Loox",
    },
  ]);

  const getAppList = useCallback(async () => {
    const repsonse = await ProgramService.getAppsList();
    setOptions(repsonse);
  }, []);

  useEffect(() => {
    getAppList();
  }, [getAppList]);

  return (
    <Select
      label="Select your Review app"
      value={details?.app_id?.toString()}
      options={options.map((e) => e.app_title)}
      onChange={(selected: string) =>
        handleChange("app_id")(
          options.find((e) => e.app_title === selected)?.id!
        )
      }
    />
  );
};

export default memo(SelectReviewApp);
