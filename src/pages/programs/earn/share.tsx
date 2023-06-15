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
import { FavoriteMajor } from "@shopify/polaris-icons";
import ProgramSummary from "./activities/programSummary";
import ProgramStatus from "./activities/programStatus";
import ProgramIcon from "./activities/programIcon";
import PointDetailProvider, {
  usePointDetail,
} from "../../../contexts/pointsDetail";

const ShareActivity = () => {
  const { details, handleChange } = usePointDetail();
  const [searchParams] = useSearchParams();
  const platform = searchParams.get("platform");

  return (
    <Page
      title={`Share our link on ${platform}`}
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
            </AlphaCard>
          </Box>

          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Earning Points
              </Text>

              <Box paddingBlockStart="4" paddingBlockEnd="1">
                <TextField
                  label="Points Amount"
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
              description={`Points granted to member who shares link on ${platform}`}
            />
          </Box>

          <Box paddingBlockEnd="5">
            <ProgramStatus />
          </Box>

          <Box paddingBlockEnd="5">
            <ProgramIcon onChange={() => {}} defaultIcon={FavoriteMajor} />
          </Box>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

const component = () => (
  <PointDetailProvider>
    <ShareActivity />
  </PointDetailProvider>
);

export default memo(component);
