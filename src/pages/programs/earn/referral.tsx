import {
  AlphaCard,
  Box,
  Checkbox,
  HorizontalStack,
  Layout,
  Page,
  Select,
  Spinner,
  Text,
  TextField,
} from "@shopify/polaris";
import { FavoriteMajor } from "@shopify/polaris-icons";
import { useParams } from "react-router-dom";
import ProgramSummary from "./activities/programSummary";
import ProgramStatus from "./activities/programStatus";
import ProgramIcon from "./activities/programIcon";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { ProgramAction } from "../../../redux/actions/programActions";
import { IPointDetailResponse } from "../../../types/program";
import useContextualSave from "../../../hooks/useContextualSave";
import {
  getEarnDetails,
  getEarnLoading,
  programPointActions,
} from "../../../redux/reducers/pointsProgram";
import ObjectUtil from "../../../utils/object";

const ReferalActivity = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const details = useAppSelector(getEarnDetails);
  const loading = useAppSelector(getEarnLoading);
  const [initalState, setIntialState] = useState<IPointDetailResponse>();

  const handleSave = async () => {
    try {
      const payload = ObjectUtil.getChanges(initalState!, details);
      await dispatch(
        ProgramAction.updatePointDetail({ ...payload, id: details.id })
      );
      setIntialState(details);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDiscard = async () => {
    await dispatch(programPointActions.setEarnDetails(initalState!));
  };

  useContextualSave(initalState, details, {
    handleSave,
    handleDiscard,
  });

  const getData = useCallback(async () => {
    try {
      const data = await dispatch(ProgramAction.getPointDetail(id!)).unwrap();
      setIntialState(data);
    } catch (e) {}
  }, [dispatch, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChange = (key: string) => (value: string | boolean | number) => {
    dispatch(programPointActions.updateEarnState({ key, value }));
  };

  return (
    <Page
      title="Complete a Referral"
      divider
      backAction={{
        url: "/programs/points",
        content: "Program",
      }}
    >
      <div style={{ display: loading ? "block" : "none" }}>
        <Box padding="6">
          <HorizontalStack align="center" blockAlign="center">
            <Spinner />
          </HorizontalStack>
        </Box>
      </div>
      <div style={{ display: loading ? "none" : "block" }}>
        <Layout>
          <Layout.Section>
            <Box paddingBlockEnd="5">
              <AlphaCard>
                <Text as="h6" variant="headingMd">
                  Earning Points
                </Text>

                <Box paddingBlockStart="4">
                  <TextField
                    label="Points Amount"
                    type="number"
                    value={details.points_amounts?.toString()}
                    placeholder="100"
                    onChange={(value) => handleChange("points_amounts")(value)}
                    autoComplete="off"
                    connectedRight={
                      <Text variant="bodyMd" alignment="center" as={"h1"}>
                        Points
                      </Text>
                    }
                  />
                </Box>

                <Box paddingBlockStart="4" paddingBlockEnd="2">
                  <Checkbox
                    label="Limit how many times each customer can earn points for completing this action"
                    checked={details.limit_count_enabled === 0 ? false : true}
                    onChange={(newChecked: boolean) =>
                      handleChange("limit_count_enabled")(newChecked ? 1 : 0)
                    }
                  />
                </Box>

                <div
                  style={{
                    display: Boolean(details.limit_count_enabled)
                      ? "block"
                      : "none",
                  }}
                >
                  <Box paddingBlockEnd="1">
                    <TextField
                      label=""
                      type="number"
                      value={details.limit_count?.toString()}
                      placeholder="10"
                      onChange={(value) => handleChange("limit_count")(value)}
                      autoComplete="off"
                      connectedRight={
                        <Select
                          label=""
                          options={["hour", "day", "week"]}
                          value={details.limit_count_type?.toString()}
                          onChange={(value) =>
                            handleChange("limit_count_type")(value)
                          }
                        />
                      }
                    />
                  </Box>
                </div>
              </AlphaCard>
            </Box>
          </Layout.Section>
          <Layout.Section secondary>
            <Box paddingBlockEnd="5">
              <ProgramSummary
                title="Summary"
                description="Points granted to member who generates a completed referral."
              />
            </Box>

            <Box paddingBlockEnd="5">
              <ProgramStatus
                active={details.status === "on"}
                onChange={(e) =>
                  handleChange("status")(e.target.checked ? "on" : "off")
                }
              />
            </Box>

            <Box paddingBlockEnd="5">
              <ProgramIcon onChange={() => {}} defaultIcon={FavoriteMajor} />
            </Box>
          </Layout.Section>
        </Layout>
      </div>
    </Page>
  );
};

export default ReferalActivity;
