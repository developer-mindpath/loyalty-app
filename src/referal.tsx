import { useEffect, useState, useCallback, ChangeEvent } from "react";
import Toggle from "react-toggle";
import ContextualSaveBarWrapper from "./components/ContextualSaveBar";
import "react-toggle/style.css";
import {
  AlphaCard,
  Page,
  Layout,
  FormLayout,
  Text,
  Checkbox,
  TextField,
  RadioButton,
  DropZone,
  Spinner,
  Select,
  Badge,
  VerticalStack,
} from "@shopify/polaris";
import { compareObjects } from "./utils/object";
import { FormService } from "./service/formService";

export interface APIData {
  id: string;
  enable: boolean;
  points_amount: number;
  points_limit: number;
  selectedOption: string;
  review_app: string;
  limit_count_enabled: boolean;
}

function SetRule() {
  const [initialFormData, setInitialFormData] = useState<APIData>(
    {} as APIData
  );
  const [data, setData] = useState<APIData>({} as APIData);
  const [formUpdated, setFormUpdated] = useState<boolean>(false);

  const reviewAppOptions = ["Loox", "Cternity"];
  const timeframeOptions = [
    { value: "minute", label: "Minute" },
    { value: "hour", label: "Hour" },
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
    { value: "eternity", label: "Eternity" },
  ];

  const {
    review_app: reviewApp,
    enable: enabled,
    limit_count_enabled: limitCountEnabled,
    points_amount: pointsAmounts,
    points_limit: pointsLimit,
    selectedOption,
  } = data;

  console.log(pointsAmounts, pointsLimit);

  useEffect(() => {
    const isEqual = compareObjects(initialFormData, data);
    console.log(initialFormData, data, "isEqual:", isEqual);
    setFormUpdated(!isEqual);
  }, [data, initialFormData]);

  // Others
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [radioValue, setSelectedOption] = useState<string>("defaultIcon");
  // Booleans
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleChange = (name: string, value: string | number | boolean) => {
    setData((prev: APIData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveButtonClick = () => {
    updateData();
  };

  const handleDiscardChanges = () => {
    console.log("Discard Changes");
    setFormUpdated(false);
    setData(initialFormData);
  };

  const updateData = async () => {
    const data: APIData = {
      id: initialFormData.id,
      enable: enabled,
      points_amount: pointsAmounts,
      points_limit: pointsLimit,
      review_app: reviewApp,
      selectedOption,
      limit_count_enabled: limitCountEnabled,
    };

    try {
      console.log(data);
      await FormService.updateFormData(data);
      setFormUpdated(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDropZoneUpload = useCallback((files: File[]) => {
    setUploadedFile(files[0]);
  }, []);

  console.log(data.enable);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const yourDesiredId = 1;
    try {
      const response = await FormService.getFormData(yourDesiredId);
      setData(response);
      setInitialFormData(response);
    } catch (error: unknown) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Conditionally render the component based on the loading state
  if (isLoading) {
    return (
      <div style={{ padding: "50px", textAlign: "center", color: "teal" }}>
        <Spinner size="large" />
      </div>
    );
  }

  return (
    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      {/* <ContextualSaveBar/> */}
      <ContextualSaveBarWrapper
        showSaveBar={formUpdated}
        handleSave={handleSaveButtonClick}
        handleDiscard={handleDiscardChanges}
      />
      {/* <ContextualSaveBar/> */}
      <Page
        title="Post a Product Review - Photo"
        divider
        fullWidth
        // backAction={{ url: "/programs/points/", content: "Products" }}
      >
        <Layout>
          <Layout.Section>
            <AlphaCard>
              <Text variant="headingMd" as="p" fontWeight="semibold">
                Review Settings
              </Text>

              <div style={{ marginTop: "20px" }}>
                <Select
                  label="Select your Review app"
                  options={reviewAppOptions}
                  onChange={(selected: string) =>
                    handleChange("reviewApp", selected)
                  }
                  value={reviewApp}
                />
              </div>
            </AlphaCard>
            <div style={{ marginTop: "20px" }}>
              <AlphaCard>
                <FormLayout>
                  <Text variant="headingMd" as="p" fontWeight="semibold">
                    Earning points
                  </Text>
                  <TextField
                    label="Points Amount"
                    type="number"
                    value={pointsAmounts?.toString()}
                    placeholder="100"
                    onChange={(newValue) =>
                      handleChange("points_amount", newValue)
                    }
                    autoComplete="off"
                    connectedRight={
                      <Text variant="bodyMd" alignment="center" as={"h1"}>
                        {"Points"}
                      </Text>
                    }
                  />
                  <Checkbox
                    label="Limit how many times each customer can earn points for completing this action"
                    checked={!!limitCountEnabled}
                    onChange={(checked) => {
                      handleChange("limit_count_enabled", checked);
                    }}
                  />

                  {limitCountEnabled && (
                    <div>
                      <TextField
                        label=""
                        type="number"
                        value={pointsLimit?.toString() ?? ""}
                        placeholder="10"
                        onChange={(newValue: string) => {
                          handleChange("points_limit", newValue);
                        }}
                        autoComplete="off"
                        connectedRight={
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div style={{ margin: "0px, 8px" }}>
                              <Text variant="bodyMd" as="p">
                                Per
                              </Text>
                            </div>
                            <Select
                              label=""
                              options={timeframeOptions.map(
                                (option) => option.label
                              )}
                              value={selectedOption ?? ""}
                              onChange={(selected: string) => {
                                handleChange("selectedOption", selected);
                              }}
                            />
                          </div>
                        }
                      />
                    </div>
                  )}
                </FormLayout>
              </AlphaCard>
            </div>
          </Layout.Section>

          <Layout.Section oneThird>
            <AlphaCard>
              <FormLayout>
                <Text variant="headingMd" as="p">
                  Summary
                </Text>
                <div style={{ marginLeft: 12 }}>
                  <Text as="p" variant="bodyMd" fontWeight="regular">
                    Points granted to member who generates a completed referral
                  </Text>
                </div>
              </FormLayout>
            </AlphaCard>

            <div style={{ marginTop: "20px" }}>
              <AlphaCard>
                <FormLayout>
                  <Text as="p" variant="headingSm">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      Status
                      <Badge status={enabled ? "success" : "critical"}>
                        {enabled ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  </Text>

                  <Toggle
                    icons={true}
                    name="enabled"
                    checked={!!enabled}
                    className="widget-enabled-toggle"
                    onChange={(checked: ChangeEvent<HTMLInputElement>) => {
                      handleChange("enable", checked.target.checked);
                    }}
                  />
                </FormLayout>
              </AlphaCard>
            </div>

            <div style={{ marginTop: "20px" }}>
              <AlphaCard>
                <FormLayout>
                  <Text variant="headingSm" as="p">
                    Icon for Widget
                  </Text>
                  <VerticalStack gap="2">
                    <RadioButton
                      label="Default icon"
                      checked={radioValue === "defaultIcon"}
                      id="defaultIcon"
                      name="iconOption"
                      onChange={(_c, id: string) => setSelectedOption(id)}
                    />
                    <RadioButton
                      label="Upload custom icon"
                      checked={radioValue === "customIcon"}
                      id="customIcon"
                      name="iconOption"
                      onChange={(_c, id: string) => setSelectedOption(id)}
                    />
                    {radioValue === "customIcon" && (
                      <DropZone
                        accept="image/*"
                        type="image"
                        onDrop={handleDropZoneUpload}
                        allowMultiple={false}
                        label="Upload Custom Icon"
                      >
                        <div>{uploadedFile?.name}</div>
                      </DropZone>
                    )}
                  </VerticalStack>
                </FormLayout>
              </AlphaCard>
            </div>
          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
}

export default SetRule;
