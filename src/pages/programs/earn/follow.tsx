import { memo } from "react";
import {
  Page,
  Layout,
  Box,
  AlphaCard,
  Text,
  TextField,
} from "@shopify/polaris";
import { useSearchParams } from "react-router-dom";
import { FavoriteMajor } from "@shopify/polaris-icons";
import ProgramIcon from "./activities/programIcon";
import ProgramStatus from "./activities/programStatus";
import ProgramPointAmount from "./activities/programPointAmount";
import PointDetailProvider from "../../../contexts/pointsDetail";

const title = "Follow on ";
const parentURL = "/programs/points";
const FollowActivity = () => {
  const [searchParam] = useSearchParams();

  return (
    <Page
      title={title + searchParam.get("platform")}
      divider
      backAction={{
        url: parentURL,
      }}
    >
      <Layout>
        <Layout.Section>
          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Social settings
              </Text>

              <Box paddingBlockStart="5">
                <TextField
                  value="kodiakcoolers"
                  autoComplete="off"
                  label=""
                  prefix="@"
                />
              </Box>
            </AlphaCard>
          </Box>

          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Earning points
              </Text>

              <Box paddingBlockStart="4">
                <ProgramPointAmount />
              </Box>
            </AlphaCard>
          </Box>
        </Layout.Section>
        <Layout.Section secondary>
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
    <FollowActivity />
  </PointDetailProvider>
);

export default memo(component);
