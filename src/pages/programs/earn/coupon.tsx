import {
  AlphaCard,
  Box,
  Checkbox,
  HorizontalStack,
  Layout,
  Page,
  RadioButton,
  Select,
  Text,
  TextField,
  VerticalStack,
} from "@shopify/polaris";
import { FavoriteMajor } from "@shopify/polaris-icons";
import ProgramSummary from "./activities/programSummary";
import ProgramStatus from "./activities/programStatus";
import ProgramIcon from "./activities/programIcon";

const CouponActivity = () => {
  const couponAmount = 20;

  return (
    <Page
      title={`$${couponAmount} off Cupon`}
      divider
      backAction={{
        url: "/programs/points",
        content: "Program",
      }}
    >
      <Layout>
        <Layout.Section>
          {/* Reawrds Title */}
          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Rewards Title
              </Text>

              <TextField
                autoComplete="off"
                label="Points earned for every $1 Spent"
                value="$10 off coupon"
              />
            </AlphaCard>
          </Box>

          {/* Point Type */}
          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Points Type
              </Text>

              <VerticalStack>
                <RadioButton
                  checked
                  label="Fixed amount of points"
                  value="fixed"
                />
                <RadioButton label="Incremented points" value="incremented" />
              </VerticalStack>
            </AlphaCard>
          </Box>

          {/* Reward */}
          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Reward
              </Text>

              <HorizontalStack>
                <TextField
                  autoComplete="off"
                  label="Points Amount"
                  suffix="points"
                />
                <Box paddingInlineStart="4">
                  <TextField autoComplete="off" label="Discount" prefix="$" />
                </Box>
              </HorizontalStack>
            </AlphaCard>
          </Box>

          {/* Reward */}
          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Reward
              </Text>

              <HorizontalStack align="start">
                <TextField
                  autoComplete="off"
                  label="Customer Redeems increment of"
                  suffix="points"
                />
                <Box paddingInlineStart="4">
                  <TextField
                    autoComplete="off"
                    label="Customer Gets Per Remption"
                    prefix="$"
                  />
                </Box>
              </HorizontalStack>

              <Box paddingBlockStart="4">
                <Checkbox
                  checked
                  label="Set a Minimum amount of points required to redeem this reward"
                />
                <TextField autoComplete="off" label="" labelHidden />
              </Box>

              <Box paddingBlockStart="4">
                <Checkbox
                  checked
                  label="Set a Maximum amount of points required to redeem this reward"
                />
                <TextField labelHidden autoComplete="off" label="" />
              </Box>
            </AlphaCard>
          </Box>

          {/* Minimum Cart Requirement */}
          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Minimum Cart Requirement
              </Text>

              <VerticalStack>
                <RadioButton label="None" />
                <RadioButton label="Minimum Cart Value" checked />
              </VerticalStack>

              <TextField
                label="Minimal Cart Value"
                value="2"
                prefix="$"
                type="number"
                autoComplete="off"
              />
            </AlphaCard>
          </Box>

          {/* Apply To */}
          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Apply To:
              </Text>

              <VerticalStack>
                <RadioButton label="Entire Order" />
                <RadioButton label="Choose Collection" checked />
              </VerticalStack>
              {/* TODO: Load options from API */}
              <Select label="Minimal Cart Value" options={[]} />
            </AlphaCard>
          </Box>

          {/* Purchase Type */}
          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Purchase Type (Optional)
              </Text>

              <VerticalStack>
                <RadioButton label="One-time Purchase" checked />
                <RadioButton label="Subscription" />
                <RadioButton label="Both" />
              </VerticalStack>
            </AlphaCard>
          </Box>

          {/* Purchase Type */}
          <Box paddingBlockEnd="5">
            <AlphaCard>
              <Text as="h6" variant="headingMd">
                Rewards Expiration
              </Text>

              <Checkbox
                checked
                label="Set issued rewards to expire after a certain amount of time"
              />
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

export default CouponActivity;
