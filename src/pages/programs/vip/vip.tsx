import {
  AlphaCard,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Collapsible,
  Divider,
  HorizontalStack,
  Icon,
  Layout,
  Page,
  RadioButton,
  Text,
  TextField,
  VerticalStack,
} from "@shopify/polaris";
import Toggle from "react-toggle";
import { CashDollarMajor, EditMinor } from "@shopify/polaris-icons";
import SectionDivider from "../../../components/layouts/sectionDivider";
import PointsListItem from "../../../components/points/pointsListItem";
import { useState } from "react";

const VipPage = () => {
  const [startDateEdit, setStartDateEdit] = useState<boolean>(false);
  const [expirationEdit, setExpirationEdit] = useState<boolean>(false);
  const [entryMethodEdit, seteEntryMethodEdit] = useState<boolean>(false);

  const handlestartDateEdit = (show: boolean) => {
    setStartDateEdit(show);
  };
  const handleexpirationEdit = (show: boolean) => {
    setExpirationEdit(show);
  };
  const handleEntryMethodEit = (show: boolean) => {
    seteEntryMethodEdit(show);
  };

  return (
    <Page
      divider
      title="VIP Program"
      titleMetadata={<Badge status="success">Enabled</Badge>}
      subtitle=" Customize your VIP program "
    >
      <Layout.AnnotatedSection
        title="VIP Program Status"
        description="Enable or disable your VIP program."
      >
        <AlphaCard padding="8">
          <HorizontalStack align="space-between" blockAlign="center">
            <Text as="p">
              The program is currently{" "}
              <Text as="span" fontWeight="bold">
                enabled
              </Text>
            </Text>

            <Toggle />
          </HorizontalStack>
        </AlphaCard>
      </Layout.AnnotatedSection>

      <Layout.AnnotatedSection
        title="VIP Tiers"
        description={
          <>
            <Box paddingBlockEnd="5">
              <Text as="p">
                Incentivize customer spending and activity by allowing members
                to reach exclusive VIP tiers.
              </Text>
            </Box>
            <Button>Add VIP Tier</Button>
          </>
        }
      >
        <AlphaCard padding="2">
          <Box padding="4">
            <HorizontalStack align="space-between" blockAlign="center">
              <div style={{ width: "50%" }}>
                <div style={{ width: "fit-content" }}>
                  <HorizontalStack>
                    <Icon source={CashDollarMajor} color="base" />
                    <Box paddingInlineStart="4">
                      <Text as="p" variant="headingSm">
                        {"Bronze"}
                      </Text>
                      <Text as="p" variant="bodySm">
                        {"Earn 0 Points "}
                      </Text>
                    </Box>
                  </HorizontalStack>
                </div>
              </div>
              <Box paddingInlineStart="4" paddingInlineEnd="4">
                <Button icon={EditMinor} onClick={() => ({})}>
                  Edit
                </Button>
              </Box>
            </HorizontalStack>
          </Box>
          <Divider />
        </AlphaCard>
      </Layout.AnnotatedSection>

      <Layout.AnnotatedSection
        title="Program Settings"
        description={
          "We will recalculate your customers tiers after changing any of the following settings"
        }
      >
        <VerticalStack gap="5">
          <AlphaCard padding="0">
            <Box
              paddingBlockStart="4"
              paddingInlineStart="4"
              paddingInlineEnd="4"
            >
              <HorizontalStack align="space-between" blockAlign="center">
                <Text as="h6" variant="headingMd">
                  Program Start Date
                </Text>
                {!startDateEdit && (
                  <Button plain onClick={() => handlestartDateEdit(true)}>
                    Edit
                  </Button>
                )}
              </HorizontalStack>
            </Box>
            <SectionDivider dense />
            <Box
              paddingBlockStart="0"
              paddingBlockEnd="4"
              paddingInlineStart="4"
              paddingInlineEnd="4"
            >
              <Text as="p">
                Customers are placed onto VIP tiers by looking at activity
                starting on <b>January 31, 2023 </b>
              </Text>
              <Collapsible
                open={startDateEdit}
                id="ProgramStartDate_collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
                expandOnPrint
              >
                <SectionDivider dense />
                <Box paddingBlockEnd="6">
                  <Text as="p">Program start date</Text>
                </Box>
                <Box paddingBlockEnd="4">
                  <TextField
                    value={""}
                    onChange={() => ({})}
                    autoComplete="off"
                    label=" We can only account for activity from when you installed the
                  app."
                  />
                </Box>
                <ButtonGroup>
                  <Button onClick={() => handlestartDateEdit(false)}>
                    Cancel
                  </Button>
                  <Button primary>Update</Button>
                </ButtonGroup>
              </Collapsible>
            </Box>
          </AlphaCard>

          <AlphaCard padding="0">
            <Box
              paddingBlockStart="4"
              paddingInlineStart="4"
              paddingInlineEnd="4"
            >
              <HorizontalStack align="space-between" blockAlign="center">
                <Text as="h6" variant="headingMd">
                  Entry Method
                </Text>
                {!entryMethodEdit && (
                  <Button plain onClick={() => handleEntryMethodEit(true)}>
                    Edit
                  </Button>
                )}
              </HorizontalStack>
            </Box>
            <SectionDivider dense />
            <Box
              paddingBlockStart="0"
              paddingBlockEnd="4"
              paddingInlineStart="4"
              paddingInlineEnd="4"
            >
              <Text as="p">
                Customers are placed onto VIP Tiers based upon their total
                <b> points earned . </b>
              </Text>
              <Collapsible
                open={entryMethodEdit}
                id="entryMethod-collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
                expandOnPrint
              >
                <SectionDivider dense />
                <VerticalStack>
                  <div style={{ margin: "6px 0px" }}>
                    <RadioButton
                      label="Points earned "
                      checked={true}
                      id="Points earned "
                      name="Points earned "
                      onChange={() => ({})}
                    />
                  </div>
                  <div style={{ margin: "6px 0px" }}>
                    <RadioButton
                      id="Amount spent "
                      label="Amount spent "
                      name="Amount spent "
                      checked={true}
                      onChange={() => ({})}
                    />
                  </div>
                  <div style={{ margin: "6px 0px" }}>
                    <RadioButton
                      id="Number of orders placed "
                      label="Number of orders placed "
                      name="Number of orders placed "
                      checked={true}
                      onChange={() => ({})}
                    />
                  </div>
                </VerticalStack>
                <ButtonGroup>
                  <Button onClick={() => handleEntryMethodEit(false)}>
                    Cancel
                  </Button>
                  <Button primary>Update</Button>
                </ButtonGroup>
              </Collapsible>
            </Box>
          </AlphaCard>
          <AlphaCard padding="0">
            <Box
              paddingBlockStart="4"
              paddingInlineStart="4"
              paddingInlineEnd="4"
            >
              <HorizontalStack align="space-between" blockAlign="center">
                <Text as="h6" variant="headingMd">
                  Expiration
                </Text>

                {!expirationEdit && (
                  <Button plain onClick={() => handleexpirationEdit(true)}>
                    Edit
                  </Button>
                )}
              </HorizontalStack>
            </Box>
            <SectionDivider dense />
            <Box
              paddingBlockStart="0"
              paddingBlockEnd="4"
              paddingInlineStart="4"
              paddingInlineEnd="4"
            >
              <Text as="p">
                A customer has a <b>Lifetime</b> to successfully achieve a VIP
                tier.
              </Text>
              <Collapsible
                open={expirationEdit}
                id="entryMethod-collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
                expandOnPrint
              >
                <SectionDivider dense />
                <Text as="p">
                  Set how long you will allow customers to take to achieve a VIP
                  Tier:
                </Text>
                <VerticalStack>
                  <div style={{ margin: "6px 0px" }}>
                    <RadioButton
                      label="A lifetime, once they are a loyalty program member.  "
                      helpText="This is the more generous option. There is no limit to how long they can take."
                      checked={true}
                      id="lifetime"
                      name="lifetime"
                      onChange={() => ({})}
                    />
                  </div>
                  <div style={{ margin: "6px 0px" }}>
                    <RadioButton
                      id="calenderYear"
                      label="A full calendar year "
                      helpText="The more aggressive option. Introduce a time limit to encourage activity."
                      name="calenderYear"
                      checked={true}
                      onChange={() => ({})}
                    />
                  </div>
                </VerticalStack>
                <ButtonGroup>
                  <Button onClick={() => handleexpirationEdit(false)}>
                    Cancel
                  </Button>
                  <Button primary>Update</Button>
                </ButtonGroup>
              </Collapsible>
            </Box>
          </AlphaCard>
        </VerticalStack>
      </Layout.AnnotatedSection>
    </Page>
  );
};

export default VipPage;
