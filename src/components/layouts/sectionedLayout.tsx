import { Text, Layout, Box } from "@shopify/polaris";

export interface ISettingsLayoutProps {
  title: string;
  description: string;
  children: JSX.Element;
}

const SectionedLayout = ({
  title,
  description,
  children,
}: ISettingsLayoutProps) => (
  <Layout>
    <Layout.Section secondary>
      <Box paddingBlockStart="2">
        <Text as="h6" variant="headingMd">
          {title}
        </Text>
      </Box>
      <Box paddingBlockStart="6">
        <Text as="h6">{description}</Text>
      </Box>
    </Layout.Section>
    <Layout.Section>{children}</Layout.Section>
  </Layout>
);

export default SectionedLayout;
