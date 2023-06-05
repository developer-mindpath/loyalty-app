import { useState, useMemo, useCallback, useEffect } from "react";
import Toggle from "react-toggle";
import { List, arrayMove } from "react-movable";
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
} from "@shopify/polaris";
import {
  CircleTickOutlineMinor,
  StarOutlineMinor,
} from "@shopify/polaris-icons";
import { useAppDispatch } from "../../redux/store";
import ProgramsAction from "../../redux/actions/programAction";
import PointListItem from "../../components/points/pointsListItem";
import SectionDivider from "../../components/layouts/sectionDivider";
import DescriptionButton from "../../components/layouts/descriptionButton";

function Points() {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  // Modal
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const statusLabel = useMemo(() => (active ? "on" : "off"), [active]);
  const [items, setItems] = useState([
    {
      name: "Post a Product Review",
      icon: StarOutlineMinor,
      checked: true,
      points: 500,
      path: "/product-review",
    },
    {
      name: "Complete a Referal",
      icon: CircleTickOutlineMinor,
      checked: false,
      points: 1500,
      path: "/product-review",
    },
  ]);

  /**
   * Get Page Points Data
   */
  const getPointsData = useCallback(() => {
    dispatch(ProgramsAction.getPointEarnings("sad"));
  }, [dispatch]);

  /**
   * Get Page Redeeming Data
   */
  const getRedeemingData = useCallback(() => {
    dispatch(ProgramsAction.getRedeemingPoints("sad"));
  }, [dispatch]);

  /**
   * Get Redeeming Points
   */
  const getRedeemingPoints = useCallback(() => {
    dispatch(ProgramsAction.getRedeemingPoints("sad"));
  }, [dispatch]);

  useEffect(() => {
    getPointsData();
    getRedeemingData();
    getRedeemingPoints();
  }, [getPointsData, getRedeemingData, getRedeemingPoints]);

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
          description={
            <DescriptionButton
              description="Shopify and your customers will use this information to contact you."
              buttonText="Add More Ways to Earn"
              onClick={handleModalOpen1}
            />
          }
        >
          <AlphaCard padding="0">
            <Box
              paddingBlockStart="4"
              paddingInlineStart="4"
              paddingInlineEnd="4"
            >
              <Text as="h6" variant="headingMd">
                Customers will earn points through the actions active below
              </Text>
            </Box>
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
                    <PointListItem {...value} />
                  </div>
                );
              }}
            />
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
            <Box
              paddingBlockStart="4"
              paddingInlineStart="4"
              paddingInlineEnd="4"
            >
              <Text as="h6" variant="headingMd">
                Customers can redeem these rewards using their points
              </Text>
            </Box>
            <SectionDivider dense />
            <Box padding="4">
              {items.map((e) => (
                <PointListItem {...e} />
              ))}
            </Box>
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
          Add the form or content for adding more ways to earn points here.
        </Modal.Section>
      </Modal>
    </Page>
  );
}

export default Points;
