import { memo } from "react";
import {
  AlphaCard,
  Box,
  Layout,
  Page,
  Text,
  TextField,
} from "@shopify/polaris";
import ProgramSummary from "@/pages/programs/points/activities/programSummary";
import ProgramStatus from "@/pages/programs/points/activities/status";
import ProgramIcon from "@/pages/programs/points/activities/programIcon";
import { usePointDetail } from "@/contexts/pointsDetail";
import EarnProvider from "@/pages/programs/points/activities/earnProvider";

const BirthdayActivity = () => {
  const { details, handleChange } = usePointDetail();

  return (
    <Page
      title="Celebrate a Birthday"
      divider
      backAction={{
        url: "/programs/points",
        content: "Program",
      }}
    >
      <Layout>
        <Layout.Section>
          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Earning points
              </Text>

              <Box paddingBlockStart="4" paddingBlockEnd="1">
                <TextField
                  label="Points Granted"
                  type="number"
                  value={details?.points_amounts?.toString()}
                  placeholder="100"
                  onChange={handleChange("points_amounts")}
                  autoComplete="off"
                  connectedRight={
                    <Text variant="bodyMd" alignment="center" as={"h1"}>
                      Points
                    </Text>
                  }
                />
              </Box>
            </AlphaCard>
          </Box>
        </Layout.Section>
        <Layout.Section secondary>
          <Box paddingBlockEnd="5">
            <ProgramSummary
              title="Summary"
              description={
                <ul style={{ padding: "0px 0px 0px 24px", margin: 0 }}>
                  <li>300 points/s for completing action</li>
                  <li>Limit of 1 per year</li>
                </ul>
              }
            />
          </Box>

          <Box paddingBlockEnd="5">
            <ProgramStatus />
          </Box>

          <Box paddingBlockEnd="5">
            <ProgramIcon />
          </Box>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

const component = () => (
  <EarnProvider>
    <BirthdayActivity />
  </EarnProvider>
);

export default memo(component);
