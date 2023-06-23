import {
  AlphaCard,
  Grid,
  HorizontalStack,
  Icon,
  Page,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import {
  AddMajor,
  BillingStatementDollarMajor,
  EmailMajor,
  EmbedMinor,
  GiftCardMajor,
  OrdersMajor,
  SettingsMajor,
  ToolsMajor,
} from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const IconBox = styled.div`
  padding: 8px;
  background-color: #f4f6f8;
  width: fit-content;
  height: fit-content;
  margin: 0px 12px 0px 0px;
  border-radius: 4px;
`;

const SettingCard = styled.div`
  height: 100%;

  .heading {
  }

  .caption {
    .Polaris-Text--root {
      font-weight: 400;
    }
  }

  .Polaris-Box {
    cursor: pointer;
    box-shadow: none;
    background-color: transparent;
    height: 100%;

    &:hover {
      background-color: #f9fafb;
    }

    &:hover ${IconBox} {
      background-color: #dfe3e8;
    }
  }
`;

const settingsList = [
  {
    title: "General",
    icon: SettingsMajor,
    path: "/settings/general",
    caption: "Basic settings for your store",
  },
  {
    title: "Billing",
    icon: BillingStatementDollarMajor,
    path: "/settings/billing",
    caption: "View and Update your billing",
  },
  {
    title: "Email",
    icon: EmailMajor,
    path: "/settings/email",
    caption: "Customize email settings for your program notifications.",
  },
  {
    title: "CSV Import",
    icon: SettingsMajor,
    path: "/settings/import",
    caption:
      "Moving from another app? Migrate your existing loyalty data using a CSV upload.",
  },
  {
    title: "Reward Past Actions",
    icon: GiftCardMajor,
    path: "/settings/rewards",
    caption:
      "Retroactively grant points for actions before the app was installed.",
  },
  {
    title: "Orders",
    icon: OrdersMajor,
    path: "/settings/orders",
    caption:
      "Fine tune your loyalty program by determining how to attribute orders.",
  },
  {
    title: "Integrations",
    icon: AddMajor,
    path: "/settings/integrations",
    caption:
      "Supercharge your program by connecting to other services you use.",
  },
  {
    title: "Developer Toolkit",
    icon: ToolsMajor,
    path: "/settings/toolkit",
    caption:
      "Create custom solutions white our Developers APIs. Access Rivo data through Shopify Metafields.",
  },
  {
    title: "Webhooks",
    icon: EmbedMinor,
    path: "/settings/webhooks",
    caption:
      "Create webhooks to open up endless possibilites for any use case.",
  },
];

const Settings = () => {
  const navigate = useNavigate();

  return (
    <Page title="Settings" divider>
      <AlphaCard roundedAbove="sm" padding="8">
        <Grid gap={{ xs: "200px" }}>
          {settingsList.map((setting) => (
            <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 4 }}>
              <SettingCard onClick={() => navigate(setting.path)}>
                <AlphaCard>
                  <HorizontalStack wrap={false}>
                    <IconBox className="icon">
                      <Icon source={setting.icon} color="base" />
                    </IconBox>
                    <VerticalStack>
                      <div className="heading">
                        <Text as="h6" variant="headingMd">
                          {setting.title}
                        </Text>
                      </div>
                      <div className="caption">
                        <Text as="h6" variant="bodySm">
                          {setting.caption}
                        </Text>
                      </div>
                    </VerticalStack>
                  </HorizontalStack>
                </AlphaCard>
              </SettingCard>
            </Grid.Cell>
          ))}
        </Grid>
      </AlphaCard>
    </Page>
  );
};

export default Settings;
