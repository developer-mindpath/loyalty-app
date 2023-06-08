import { AlphaCard, Badge, Layout, Page, Text } from "@shopify/polaris";
import { useState } from "react";
import SectionDivider from "../../../components/layouts/sectionDivider";
import PointsListItem from "../../../components/points/pointsListItem";
import { StoreStatusMajor } from "@shopify/polaris-icons";

const EmailProgram = () => {
  const [isEnabled] = useState<boolean>(false);

  return (
    <Page
      divider
      fullWidth
      title="Encourage engagement with your customers"
      titleMetadata={
        <Badge status={isEnabled ? "success" : "critical"}>
          {isEnabled ? "Enabled" : "Disabled"}
        </Badge>
      }
      subtitle="Send email notifications for the program to promote engagement with customers."
    >
      <Layout>
        <Layout.AnnotatedSection
          title="Email Notifications"
          description="Choose from multiple email notifications you can send your customers to entice them to take advantage of their loyalty points & to drive more referral customers. Full Customizable just hit the edit button next to each program."
        >
          <AlphaCard>
            <Text as="h3" variant="headingSm">
              Choose which emails you would like to send & edit
            </Text>
            <SectionDivider />
            <ul>
              {/* <PointsListItem
                name="Points Earned"
                icon={StoreStatusMajor}
                path="/programs/email/1232"
                checked={false}
              />
              <PointsListItem
                name="Reward Redeemed"
                icon={StoreStatusMajor}
                path={""}
                checked={false}
              />
              <PointsListItem
                name="Celebrate Birthday"
                icon={StoreStatusMajor}
                path={""}
                checked={false}
              />
              <PointsListItem
                name="Referral Completed"
                icon={StoreStatusMajor}
                path={""}
                checked={false}
              />
              <PointsListItem
                name="Reward Expiring - Warning"
                icon={StoreStatusMajor}
                path={""}
                checked={false}
              />
              <PointsListItem
                name="Reward Expiring - Last Chance"
                icon={StoreStatusMajor}
                path={""}
                checked={false}
              />
              <PointsListItem
                name="Points Expiring - Warning"
                icon={StoreStatusMajor}
                path={""}
                checked={false}
              />
              <PointsListItem
                name="Points Expiring - Last Chance"
                icon={StoreStatusMajor}
                path={""}
                checked={false}
              />
              <PointsListItem
                name="VIP Tier - Unlocked"
                icon={StoreStatusMajor}
                path={""}
                checked={false}
              />
              <PointsListItem
                name="Referrals - Invite Friends"
                icon={StoreStatusMajor}
                path={""}
                checked={false}
              /> */}
            </ul>
          </AlphaCard>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
};

export default EmailProgram;
