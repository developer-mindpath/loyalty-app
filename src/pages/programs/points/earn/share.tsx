import { memo } from "react";
import { useSearchParams } from "react-router-dom";
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
import ProgramPointAmount from "@/pages/programs/points/activities/programPointAmount";
import EarnProvider from "@/pages/programs/points/activities/earnProvider";

const ShareActivity = () => {
  const { details, handleChange } = usePointDetail();
  const [searchParams] = useSearchParams();
  const platform = searchParams.get("platform");

  return (
    <Page
      title={`Share link on ${platform}`}
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
                Social Settings
              </Text>

              <Box paddingBlockStart="4" paddingBlockEnd="1">
                <TextField
                  label="URL to share"
                  type="text"
                  value={details?.url_to_share ?? ""}
                  placeholder="100"
                  onChange={handleChange("url_to_share")}
                  autoComplete="off"
                />
              </Box>

              {platform?.toLowerCase() === "twitter" && (
                <Box paddingBlockStart="4" paddingBlockEnd="1">
                  <TextField
                    multiline={4}
                    label="Message"
                    type="text"
                    value={details?.url_to_share ?? ""}
                    onChange={handleChange("url_to_share")}
                    autoComplete="off"
                  />
                </Box>
              )}
            </AlphaCard>
          </Box>

          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Earning Points
              </Text>

              <Box paddingBlockStart="4" paddingBlockEnd="1">
                <ProgramPointAmount />
              </Box>
            </AlphaCard>
          </Box>
        </Layout.Section>
        <Layout.Section secondary>
          <Box paddingBlockEnd="5">
            <ProgramSummary
              title="Summary"
              description={`Points granted to member who shares link on ${platform}`}
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
    <ShareActivity />
  </EarnProvider>
);

export default memo(component);
