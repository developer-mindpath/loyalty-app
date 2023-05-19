import { useState, useMemo } from "react";
import Toggle from "react-toggle";
import { List, arrayMove } from "react-movable";
import {
  Card,
  Page,
  Layout,
  FormLayout,
  Banner,
  Button,
  Modal,
  AlphaCard,
  Text,
  Box,
} from "@shopify/polaris";
import PointListItem from "../../components/points/pointsListItem";
import SectionDivider from "../../components/layouts/sectionDivider";

const DescPlusButton1 = ({ handleModalOpen1 }: any) => (
  <div>
    Shopify and your customers will use this information to contact you.
    <br></br>
    <br></br>
    <Button id="addEarnMethod" onClick={handleModalOpen1}>
      Add More Ways to Earn
    </Button>
  </div>
);

const DescPlusButton2 = ({ handleModalOpen2 }: any) => (
  <div>
    Rewards that customers can redeem using their points
    <br></br>
    <br></br>
    <Button id="addEarnMethod" onClick={handleModalOpen2}>
      Add Another Reward
    </Button>
  </div>
);

const a = [
  <PointListItem />,
  <PointListItem />,
  <PointListItem />,
  <PointListItem />,
  <PointListItem />,
  <PointListItem />,
];

function Points() {
  const [active, setActive] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  // Modal
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const statusLabel = useMemo(() => (active ? "on" : "off"), [active]);
  const [items, setItems] = useState([0, 1, 2, 3, 4, 5]);

  const handleToggleChange = () => {
    setActive(!active);
    if (!active) {
      setShowBanner(true);
      setTimeout(() => {
        setShowBanner(false);
      }, 30000);
    }
  };

  const handleModalOpen1 = () => {
    setIsModalOpen1(true);
  };

  const handleModalClose1 = () => {
    setIsModalOpen1(false);
  };

  const handleModalOpen2 = () => {
    setIsModalOpen2(true);
  };

  const handleModalClose2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <Page title="Points Program" divider fullWidth>
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
                icons={true}
                name="enabled"
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
          description={<DescPlusButton1 handleModalOpen1={handleModalOpen1} />}
        >
          <AlphaCard>
            <Text as="h6" variant="headingMd">
              Customers will earn points through the actions active below
            </Text>
            <SectionDivider dense />
            <List
              values={items}
              onChange={({ oldIndex, newIndex }) => {
                setItems(arrayMove(items, oldIndex, newIndex));
              }}
              lockVertically
              renderList={({ children, props }) => (
                <ul {...props}>{children}</ul>
              )}
              renderItem={({ value, props }) => {
                return (
                  <div {...props} style={{ ...props.style, margin: "8px 0px" }}>
                    {a[value]}
                  </div>
                );
              }}
            />
          </AlphaCard>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          title="Redeeming Points"
          description={<DescPlusButton2 handleModalOpen2={handleModalOpen2} />}
        >
          <Card
            title="Customers can redeem these rewards using their points"
            sectioned
          >
            {/* <Review /> */}
          </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          title="Earn Points"
          description="Increase engagement by setting customer's points balances to expire after a certain amount of time."
        >
          <Card
            title="Reset points balance to zero after a certain period"
            sectioned
          ></Card>
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
          <p>
            Add the form or content for adding more ways to earn points here.
          </p>
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
