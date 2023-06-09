import Toggle from "react-toggle";
import { List } from "react-movable";
import {
  Page,
  Layout,
  FormLayout,
  Banner,
  Modal,
  AlphaCard,
  Text,
  Box,
  Checkbox,
  Spinner,
  Divider,
} from "@shopify/polaris";
import DescriptionButton from "../../components/layouts/descriptionButton";
import PointsController from "./controller";
import PointsListItem from "../../components/points/pointsListItem";
import { rewardType } from "../../constants/reward";
import EarningList from "../../components/earningList";

function Points() {
  const { getters, handlers } = PointsController();
  const {
    active,
    isModalOpen1,
    isModalOpen2,
    earnList,
    earnLoading,
    showBanner,
    statusLabel,
  } = getters;
  const {
    handleModalClose1,
    handleModalClose2,
    handleModalOpen1,
    handleModalOpen2,
    handleToggleChange,
  } = handlers;

  return (
    <Page title="Points Program" divider>
      <Layout>
        <Layout.AnnotatedSection
          id="storeDetails"
          title="Points Program Status"
          description="Enable or disable your loyalty points program."
        >
          <AlphaCard>
            <Box paddingBlockEnd="2">
              <Text as="h5" variant="headingMd">
                Program Status
              </Text>
            </Box>
            <FormLayout>
              <Toggle
                icons
                checked={active}
                className="widget-enabled-toggle"
                onChange={handleToggleChange}
              />
              <p>
                This Program is currently:{" "}
                <span style={{ fontWeight: "bold" }}>{statusLabel}</span>
              </p>
              {showBanner && (
                <Banner status="success">
                  Yay! 🎉 Please allow 30 seconds for the widget to update on
                  your store
                </Banner>
              )}
              {!active && (
                <Banner status="warning">
                  Enable this program to set live on your store ☝️ Customers
                  cannot currently access this program.
                </Banner>
              )}
            </FormLayout>
          </AlphaCard>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          title="Earn Points"
          description={
            <DescriptionButton
              description="Shopify and your customers will use this information to contact you."
              buttonText="Add More Ways to Earn"
              onClick={handleModalOpen1}
            />
          }
        >
          <AlphaCard padding="0">
            <Box padding="4">
              <Text as="h6" variant="headingMd">
                Customers will earn points through the actions active below
              </Text>
            </Box>
            <Divider />
            <div
              style={{
                display: earnLoading ? "block" : "none",
                textAlign: "center",
              }}
            >
              <Box padding="4">
                <Spinner size="small" />
              </Box>
            </div>
            <div style={{ display: earnLoading ? "none" : "block" }}>
              <List
                values={earnList}
                onChange={({ oldIndex, newIndex }) => {}}
                lockVertically
                renderList={({ children, props }) => (
                  <ul {...props}>{children}</ul>
                )}
                renderItem={({ value, props }) => {
                  return (
                    <div
                      key={value.id}
                      {...props}
                      style={{ ...props.style, margin: "8px 0px" }}
                    >
                      <Box paddingInlineStart="1" paddingInlineEnd="6">
                        <PointsListItem
                          points={value.points_amounts}
                          name={value.action_key_display_text}
                          icon={value.action_icon}
                          checked={Boolean(value.is_action_enabled)}
                          path={`/programs/points/${value.action_key}/${value.id}`}
                        />
                      </Box>
                    </div>
                  );
                }}
              />
            </div>
          </AlphaCard>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          title="Redeeming Points"
          description={
            <DescriptionButton
              description="Rewards that customers can redeem using their points"
              buttonText="Add Another Reward"
              onClick={handleModalOpen2}
            />
          }
        >
          <AlphaCard padding="0">
            <Box padding="4" paddingInlineStart="4" paddingInlineEnd="4">
              <Text as="h6" variant="headingMd">
                Customers can redeem these rewards using their points
              </Text>
            </Box>
            <Divider />
            <div
              style={{
                display: earnLoading ? "block" : "none",
                textAlign: "center",
              }}
            >
              <Box padding="4">
                <Spinner size="small" />
              </Box>
            </div>
            <div style={{ display: earnLoading ? "none" : "block" }}>
              <List
                values={earnList}
                onChange={({ oldIndex, newIndex }) => {}}
                lockVertically
                renderList={({ children, props }) => (
                  <ul {...props}>{children}</ul>
                )}
                renderItem={({ value, props }) => {
                  return (
                    <div
                      key={value.id}
                      {...props}
                      style={{ ...props.style, margin: "8px 0px" }}
                    >
                      <Box paddingInlineEnd="6">
                        <PointsListItem
                          points={value.points_amounts}
                          name={value.action_key_display_text}
                          icon={value.action_icon}
                          checked={Boolean(value.is_action_enabled)}
                          path={`/programs/points/${value.action_key}/${value.id}`}
                        />
                      </Box>
                    </div>
                  );
                }}
              />
            </div>
          </AlphaCard>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          title="Earn Points"
          description="Increase engagement by setting customer's points balances to expire after a certain amount of time."
        >
          <AlphaCard>
            <Box paddingBlockEnd="16">
              <Checkbox label="Reset points balance to zero after a certain period" />
            </Box>
          </AlphaCard>
        </Layout.AnnotatedSection>
      </Layout>
      <Modal
        open={isModalOpen1}
        onClose={handleModalClose1}
        title="Add More Ways to Earn"
        primaryAction={{
          content: "Add",
          onAction: () => {
            // Add your logic for adding a new earning method here
            handleModalClose1();
          },
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: handleModalClose1,
          },
        ]}
      >
        <Modal.Section>
          <EarningList
            rewards={rewardType}
            remove={earnList.map((e) => e.action_key)}
          />
        </Modal.Section>
      </Modal>
      <Modal
        open={isModalOpen2}
        onClose={handleModalClose2}
        title="Modal 2"
        primaryAction={{
          content: "Add",
          onAction: () => {
            // Add your logic for adding a new earning method here
            handleModalClose2();
          },
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: handleModalClose2,
          },
        ]}
      >
        <Modal.Section>
          <p>
            Add the form or content for adding more ways to earn points here.
          </p>
        </Modal.Section>
      </Modal>
    </Page>
  );
}

export default Points;
