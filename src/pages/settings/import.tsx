import { ChangeEvent, useEffect, useState } from "react";
import {
  AlphaCard,
  Box,
  Button,
  Divider,
  HorizontalStack,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import { ArrowDownMinor } from "@shopify/polaris-icons";

const ImportSettings = () => {
  const [file, setFile] = useState<File>();

  useEffect(() => {
    console.log(file?.name);
  }, [file]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) return;
    const [first] = files;
    setFile(first);
  };

  return (
    <Page
      divider
      title="CSV Import"
      subtitle="Grow your customer base and reward existing customers for referring thier friend, family, and anyone else!"
      backAction={{
        id: "Settings",
        url: "/settings",
      }}
    >
      <Layout sectioned>
        {/* Import  */}
        <Layout>
          <Layout.Section secondary>
            <Box>
              <div style={{ marginTop: 12 }}>
                <Text as="h6" variant="headingMd">
                  Import Loyalty Data
                </Text>
              </div>
              <div style={{ marginTop: 16 }}>
                <Text as="h6">Update Loyalty Infor for customers</Text>
              </div>
            </Box>
          </Layout.Section>
          <Layout.Section>
            <AlphaCard padding="0">
              <div style={{ padding: "16px 16px 0px" }}>
                <HorizontalStack align="space-between" blockAlign="baseline">
                  <div style={{ marginBottom: 16 }}>
                    <Text as="p" variant="headingSm">
                      Import Loyalty Data
                    </Text>
                  </div>
                  <Button icon={ArrowDownMinor} plain>
                    Download Template
                  </Button>
                </HorizontalStack>
              </div>
              <Divider />
              <div style={{ padding: "16px 16px 0px" }}>
                <Text as="p">
                  Upload a CSV file to import your customer`s loyalty data.
                </Text>
                <div style={{ margin: "16px 0px" }}>
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <Divider />
              <div style={{ padding: "20px" }}>
                <Text as="p">
                  <b>NOTE:</b> Any previous points will be reset by the points
                  balance you provide in your file
                </Text>
              </div>
            </AlphaCard>
          </Layout.Section>
        </Layout>
        <div style={{ margin: "24px 0px" }}>
          <Divider />
        </div>
        {/* Import Description */}
        <Layout>
          <Layout.Section secondary>
            <Box>
              <div style={{ marginTop: 12 }}>
                <Text as="h6" variant="headingMd">
                  Import Loyalty Data
                </Text>
              </div>
              <div style={{ marginTop: 16 }}>
                <Text as="h6">Update loyalty info for your customers</Text>
              </div>
            </Box>
          </Layout.Section>
          <Layout.Section>
            <AlphaCard padding="0">
              <div style={{ padding: "16px" }}>
                <Text as="p" variant="headingSm">
                  Switching from another app?
                </Text>
              </div>
              <Divider />
              <div style={{ padding: "16px 16px 24px" }}>
                <Text as="p">
                  Switching from another loyalty app can seen daunting. It's
                  actually quite simple and can be done in a few minutes by
                  following the steps below 👇
                </Text>
              </div>
              <Divider />
              <ol>
                <li>
                  <Text as="p">
                    Export your customer from the other app in CSV format
                  </Text>
                </li>
                <li>
                  <Text as="p">Upload the CSV above. That`s it!</Text>
                </li>
              </ol>
            </AlphaCard>
          </Layout.Section>
        </Layout>
      </Layout>
    </Page>
  );
};

export default ImportSettings;
