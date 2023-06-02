import _ from "lodash";
import Toggle from "react-toggle";
import {
  AlphaCard,
  Box,
  Button,
  Layout,
  Page,
  Text,
  TextField,
} from "@shopify/polaris";
import SectionedLayout from "../../../components/layouts/sectionedLayout";
import SectionDivider from "../../../components/layouts/sectionDivider";
import { EmailController } from "./email.controller";

const EmailSettings = () => {
  const { getters, handlers } = EmailController();
  const { data, customEmailDomain } = getters;
  const {
    handleChange,
    handleCustomEmailDomain,
    handleCustomEmailDomainUpdate,
  } = handlers;

  return (
    <Page
      title="Email"
      divider
      backAction={{
        id: "Settings",
        url: "/settings",
      }}
    >
      <Layout sectioned>
        <SectionedLayout
          title="Email Settings"
          description="Customize your email settings to match your brand."
        >
          <AlphaCard>
            <TextField
              value={data.email_from_name}
              onChange={handleChange("email_from_name")}
              label="From name"
              autoComplete="off"
              helpText="The name of visible to customer receiving your email."
            />
            <TextField
              value={data.email_from_email}
              onChange={handleChange("email_from_email")}
              label="From email"
              autoComplete="email"
              helpText="The email address visible to customer receiving the email."
            />
            <TextField
              value={data.email_reply_email}
              onChange={handleChange("email_reply_email")}
              label="Reply email"
              autoComplete="email"
              helpText="Specify an email for customers to reply to your emails."
            />
          </AlphaCard>
        </SectionedLayout>
        <SectionDivider />
        <SectionedLayout
          title="Design and Brand"
          description="Customize your emails to match your brand."
        >
          <AlphaCard>
            <Box paddingBlockEnd="4">
              <Text as="h6">
                Customize colors, fonts and images to match your brand.
              </Text>
            </Box>
            <Button primary>Edit Email Design</Button>
          </AlphaCard>
        </SectionedLayout>
        <SectionDivider />
        <SectionedLayout
          title="Email Opt-In Level"
          description="Advanced setting for special cases."
        >
          <AlphaCard>
            <Toggle checked />
            <Box paddingBlockEnd="2">
              <Text as="h6">
                Only send loyalty program email to customers who have explicity
                opted-in to your marketing emails
              </Text>
            </Box>
            <Text as="h6">
              Note: This is not a requirement, all loyalty program emails sent
              by Rivo are on a transactional basis and not mass marketing
              campaigns. Your buisness may have a requirement for your
              jurisdiction (EG: Germany) to ensure the customer is subscribed to
              marketing campaigns to recieve a transactional email.
            </Text>
          </AlphaCard>
        </SectionedLayout>
        <SectionDivider />
        <SectionedLayout
          title="Custom Email Domain"
          description="Stay on brand by sending email through your own domain"
        >
          <AlphaCard>
            <Box paddingBlockEnd="4">
              <TextField
                value={customEmailDomain ?? data.custom_email_domain}
                onChange={handleCustomEmailDomain}
                autoComplete="off"
                label="Domain Name"
              />
            </Box>
            <Button
              disabled={_.isEqual(data.custom_email_domain, customEmailDomain)}
              onClick={handleCustomEmailDomainUpdate}
            >
              Save
            </Button>
          </AlphaCard>
        </SectionedLayout>
        <SectionDivider />
        <SectionedLayout
          title="Custom URL Path"
          description="Advanced setting to customize the URL path for emails."
        >
          <AlphaCard>
            <TextField
              value={data.custom_url_path_for_email}
              onChange={handleChange("custom_url_path_for_email")}
              autoComplete="off"
              label="Custom URL path for emails"
              helpText="Default is /. Change the URL path of the email CTA. Must begin with /"
            />
          </AlphaCard>
        </SectionedLayout>
      </Layout>
      <Box paddingBlockEnd="10" />
    </Page>
  );
};

export default EmailSettings;
