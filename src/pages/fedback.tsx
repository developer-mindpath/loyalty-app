import {
  ActionList,
  AlphaCard,
  Box,
  Button,
  Divider,
  HorizontalStack,
  Icon,
  Layout,
  Page,
  Popover,
  ResourceItem,
  ResourceList,
  Select,
  Text,
  TextField,
  VerticalStack,
} from "@shopify/polaris";
import {
  ArrowUpMinor,
  CaretUpMinor,
  ChatMajor,
  NotificationMajor,
  SearchMinor,
} from "@shopify/polaris-icons";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const list = [
  {
    id: "review-1",
    name: "Leave a google review for points",
    description:
      "Leave a review on google for points using the google review link.",
    comments: 4000,
  },
  {
    id: "review-2",
    name: "Earn by subscribing to newsletter",
    state: "planned",
    description:
      "Leave a review on google for points using the google review link.",
    comments: 40,
  },
  {
    id: "review-3",
    name: "Notify customer about unused points at checkout",
    state: "planned",
    description:
      "My customers may be unaware that they have loyalty points that they could spend on discount. It would be great to have a method to tell them before logout.",
    comments: 1,
  },
];

function FeedbackPage() {
  const navigate = useNavigate();

  return (
    <Page
      title="We'd live your feedback"
      subtitle="We listen to all feedback and do our best to implement highly suggested features 😊"
      fullWidth
    >
      <AlphaCard>
        <Layout>
          {/* Create a new Feature Request */}
          <Layout.Section secondary oneThird>
            <VerticalStack>
              <Text as="p">Create a feature request</Text>
              <Text as="p">Need help? Chat with us!</Text>

              <TextField
                label="TITLE"
                value=""
                autoComplete="off"
                onChange={() => {}}
              />

              <TextField
                label="DESCRIBE THE FEATURE"
                value=""
                autoComplete="off"
                onChange={() => {}}
                multiline
              />
            </VerticalStack>
          </Layout.Section>

          {/* Tabs */}
          <Layout.Section>
            <HorizontalStack align="space-between">
              <HorizontalStack blockAlign="baseline">
                <Box paddingInlineEnd="2">
                  <Text as="p">Showing</Text>
                </Box>
                {/* TODO: Remove Traditional Select */}
                <Popover
                  active
                  activator={
                    <p
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%)",
                        backgroundPosition: "bottom",
                        backgroundSize: "3px 1px",
                        backgroundRepeat: "repeat-x",
                      }}
                    >
                      Trending
                    </p>
                  }
                  autofocusTarget="first-node"
                  onClose={() => ({})}
                >
                  <HorizontalStack>
                    <HorizontalStack>
                      <Box>
                        <Box paddingInlineStart="4" paddingBlockStart="4">
                          <Text as="h5" variant="headingXs">
                            SORT
                          </Text>
                        </Box>
                        <ActionList
                          items={[
                            { content: "Trending", active: true },
                            { content: "Top" },
                            { content: "New" },
                          ]}
                        />
                      </Box>
                      <Box>
                        <Box paddingInlineStart="4" paddingBlockStart="4">
                          <Text as="h5" variant="headingXs">
                            FILTER
                          </Text>
                        </Box>
                        <ActionList
                          items={[
                            { content: "Under Review" },
                            { content: "Planned" },
                            { content: "In Progress" },
                            { content: "Complete" },
                            { content: "My Own" },
                          ]}
                        />
                      </Box>
                    </HorizontalStack>
                  </HorizontalStack>
                </Popover>
                <Box paddingInlineStart="2">
                  <Text as="p">posts</Text>
                </Box>
              </HorizontalStack>

              <TextField
                label={undefined}
                placeholder="Search..."
                autoComplete="off"
                prefix={<Icon source={SearchMinor} />}
                connectedRight={
                  <Button
                    icon={NotificationMajor}
                    accessibilityLabel="Notifications"
                  />
                }
              />
            </HorizontalStack>

            <Box paddingBlockStart="4">
              {list.map((item) => (
                <div
                  onClick={() => navigate(`/feedback/${item.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <Box paddingBlockStart="3" paddingBlockEnd="3">
                    <HorizontalStack align="space-between" blockAlign="start">
                      <HorizontalStack blockAlign="start">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            // TODO: Increase Up Vote API
                          }}
                        >
                          <Button
                            icon={
                              <>
                                <Icon source={CaretUpMinor} />
                                <Text as="p"> 55 </Text>
                              </>
                            }
                          />
                        </div>
                        <Box paddingInlineStart="2">
                          <VerticalStack>
                            <Text as="p" variant="headingSm">
                              {item.name}
                            </Text>
                            <Text as="p" color="success" variant="headingSm">
                              {item.state?.toUpperCase()}
                            </Text>
                            <div style={{ width: "660px" }}>
                              <Text
                                as="p"
                                variant="bodyMd"
                                truncate={item.description?.length > 120}
                              >
                                {item.description}
                              </Text>
                            </div>
                          </VerticalStack>
                        </Box>
                      </HorizontalStack>
                      <HorizontalStack align="end" blockAlign="center">
                        <Box paddingInlineEnd="2">
                          <Icon source={ChatMajor} />
                        </Box>
                        <Text as="p">{item.comments}</Text>
                      </HorizontalStack>
                    </HorizontalStack>
                  </Box>
                </div>
              ))}
            </Box>
          </Layout.Section>
        </Layout>
      </AlphaCard>
    </Page>
  );
}

export default FeedbackPage;
