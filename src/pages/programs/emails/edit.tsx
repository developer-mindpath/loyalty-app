import {
  AlphaCard,
  HorizontalStack,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import Toggle from "react-toggle";

const EditEmailProgram = () => {
  return (
    <Layout>
      <Layout.Section>
        <Page fullWidth title="Loyalty Points Earned" divider>
          <AlphaCard>
            <HorizontalStack align="space-between" blockAlign="center">
              <Text as="p" variant="headingSm">
                Email Notification Status
              </Text>

              <Toggle checked />
            </HorizontalStack>
          </AlphaCard>
        </Page>
      </Layout.Section>
      <Layout.Section>
        <AlphaCard>
          <HorizontalStack align="space-between" blockAlign="center">
            <Text as="p" variant="headingSm">
              Email Notification Status
            </Text>

            <Toggle checked />
          </HorizontalStack>
        </AlphaCard>
      </Layout.Section>
    </Layout>
  );
};

export default EditEmailProgram;
