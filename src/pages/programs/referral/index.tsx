import {
  AlphaCard,
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  HorizontalStack,
  Layout,
  Page,
  Text,
  TextField,
  VerticalStack,
} from "@shopify/polaris";
import Toggle from "react-toggle";
import SectionDivider from "@/components/layouts/sectionDivider";

const ReferralPage = () => {
  return (
    <Page
      divider
      title="Referral Program"
      titleMetadata={<Badge status="success">Enabled</Badge>}
      subtitle="Grow your customer base and reward existing customer for referring their, firends, family and anyone else."
    >
      <Layout.AnnotatedSection
        title="Referral Program Status"
        description="Enable or disable your referral program."
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
        title="Referral Rewards"
        description={
          <>
            <Box paddingBlockEnd="5">
              <Text as="p">Set Rewards for both Referrals</Text>
            </Box>
            <Text as="p">Two Sided Reawrds (You Earn & They Earn!)</Text>
          </>
        }
      >
        <AlphaCard padding="0">
          <Box paddingBlockStart="6">
            <AlphaCard padding="0">
              <Box padding="4">
                <Text as="h4" variant="headingSm">
                  Person who is Referred - Receives
                </Text>
              </Box>
              <Divider />
              <Box padding="4" paddingInlineStart="8" paddingInlineEnd="8">
                {/* <PointsListItem
                  icon={CashDollarMajor}
                  name="$10 off coupon"
                  points="0 Redeemed to date"
                  path="/referral/referred"
                  checked
                /> */}
              </Box>
            </AlphaCard>
          </Box>
          <SectionDivider />
          <Box paddingBlockEnd="6">
            <AlphaCard padding="0">
              <Box padding="4">
                <Text as="h4" variant="headingSm">
                  Person who is Referred - Receives
                </Text>
              </Box>
              <Divider />
              <Box padding="4" paddingInlineStart="8" paddingInlineEnd="8">
                {/* <PointsListItem
                  icon={CashDollarMajor}
                  name="$10 off coupon"
                  points="0 Redeemed to date"
                  path="/referral/referred"
                  checked
                /> */}
              </Box>
            </AlphaCard>
          </Box>
        </AlphaCard>
      </Layout.AnnotatedSection>

      <Layout.AnnotatedSection
        title="Referrals Customer Account"
        description={`If "ON", it requires customer to create an account to claim referral coupon.`}
      >
        <AlphaCard padding="8">
          <HorizontalStack align="space-between" blockAlign="center">
            <Text as="p">
              Current status is
              <Text as="span" fontWeight="bold">
                enabled
              </Text>
            </Text>

            <Toggle />
          </HorizontalStack>
        </AlphaCard>
      </Layout.AnnotatedSection>

      <Layout.AnnotatedSection
        title="Referral Redirection URL"
        description="Set the URL that customers will be redirected to when visiting a referral link"
      >
        <AlphaCard padding="0">
          <Box paddingBlockStart="6">
            <AlphaCard padding="0">
              <Box padding="4">
                <Text as="h4" variant="headingSm">
                  Redirect URL
                </Text>
              </Box>
              <Divider />
              <Box padding="4" paddingInlineStart="8" paddingInlineEnd="8">
                {/* <PointsListItem
                  icon={CashDollarMajor}
                  name="$10 off coupon"
                  points="0 Redeemed to date"
                  path="/referral/referred"
                  checked
                /> */}
              </Box>
            </AlphaCard>
          </Box>
          <SectionDivider />
          <Box paddingBlockEnd="6">
            <AlphaCard padding="0">
              <Box padding="4">
                <Text as="h4" variant="headingSm">
                  Person who is Referred - Receives
                </Text>
              </Box>
              <Divider />
              <Box padding="4" paddingInlineStart="8" paddingInlineEnd="8">
                {/* <PointsListItem
                  icon={CashDollarMajor}
                  name="$10 off coupon"
                  points="0 Redeemed to date"
                  path="/referral/referred"
                  checked
                /> */}
              </Box>
            </AlphaCard>
          </Box>
        </AlphaCard>
      </Layout.AnnotatedSection>

      <Layout.AnnotatedSection
        title="Referrals Redirection URL"
        description="Set the URL that customers will be redirect to when visiting a referral link"
      >
        <AlphaCard>
          <Text as="h4" variant="headingMd">
            Redirect URL
          </Text>
          <TextField
            autoComplete="off"
            label=""
            labelHidden
            value="https://www.kodiak-wholesale.com"
            helpText="Your homepage will be the default if you leave this blank"
          />
        </AlphaCard>
      </Layout.AnnotatedSection>

      <Layout.AnnotatedSection
        title="Earning Points"
        description={
          <>
            <Box paddingBlockEnd="4">
              <Text as="p">
                Customize how your customers will earn points (credit)
              </Text>
            </Box>

            <Button>Add Another Way to Earn</Button>
          </>
        }
      >
        <AlphaCard padding="0">
          <Box padding="4">
            <Text as="h4" variant="headingMd">
              Social Sharing Settings
            </Text>
          </Box>
          <Divider />
          <Box padding="4">
            <Text as="p">
              Allow customers to share their referrals through the following
              social platforms
            </Text>

            <Box paddingBlockStart="4">
              <VerticalStack>
                <Checkbox label="Share on Facebook" />
                <Box paddingBlockStart="3" />
                <Checkbox label="Share on Twitter" />
                <Box paddingBlockStart="3" />
                <Checkbox label="Share via Email" />
                <Box paddingBlockStart="3" />
                <Checkbox label="Share via SMS" />
              </VerticalStack>
            </Box>
          </Box>
        </AlphaCard>
      </Layout.AnnotatedSection>
    </Page>
  );
};

export default ReferralPage;
