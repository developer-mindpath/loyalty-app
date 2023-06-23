import { useCallback, useState } from "react";
import { Frame, TopBar, Navigation, Collapsible, Box } from "@shopify/polaris";
import {
  HomeMinor,
  ColorsMajor,
  SettingsMajor,
  CodeMajor,
  PlanMajor,
  CustomersMajor,
  ViewMajor,
  ChatMajor,
  QuestionMarkInverseMajor,
  ThumbsUpMajor,
} from "@shopify/polaris-icons";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { MainLogo } from "@/assets";
import "./MainLayout.module.css";

const StyledSubNav = styled.div`
  padding-left: 28px;
  &.collapsible-transition {
    transition: max-height 0.3s ease;
  }
`;

interface IMainLayoutProps {
  children: JSX.Element;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActiveNavItem = (url: string) => location.pathname === url;
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const toggleExpandedItem = useCallback(
    (itemIndex: number) => {
      if (expandedItems.includes(itemIndex)) {
        setExpandedItems(expandedItems.filter((item) => item !== itemIndex));
      } else {
        setExpandedItems([itemIndex]);
      }
    },
    [expandedItems]
  );

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: "User Profile" }],
        },
        {
          items: [{ content: "Sign out", onAction: handleLogout }],
        },
      ]}
      name="Robby Diederich"
      detail="kodiak-wholesale.com"
      initials="RD"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
    //   {/* {logoMarkup}
    // </TopBar> */}
  );

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Item
        label="Dashboard"
        icon={HomeMinor}
        url="/"
        selected={isActiveNavItem("/")}
        onClick={() => navigate("/")}
      />
      <Navigation.Item
        label="Programs"
        icon={PlanMajor}
        onClick={() => toggleExpandedItem(0)}
      />
      <Collapsible id="collapsible-transition" open={expandedItems.includes(0)}>
        <StyledSubNav>
          <Navigation.Section
            items={[
              {
                label: "Points",
                url: "/programs/points",
                selected: isActiveNavItem("/programs/points"),
                badge: "ENABLED",
              },
              {
                label: "Referrals",
                url: "/programs/referrals",
                selected: isActiveNavItem("/programs/referrals"),
                badge: "ENABLED",
              },
              {
                label: "VIP",
                url: "/programs/vip",
                selected: isActiveNavItem("/programs/vip"),
                badge: "ENABLED",
              },
              {
                label: "Activity",
                url: "/programs/activity",
                selected: isActiveNavItem("/programs/activity"),
              },
            ]}
          />
        </StyledSubNav>
      </Collapsible>
      <Navigation.Item
        label="Analytics"
        icon={CodeMajor}
        url="/analytics"
        selected={isActiveNavItem("/analytics")}
      />
      <Navigation.Item
        label="Customers"
        icon={CustomersMajor}
        url="/customers"
        selected={isActiveNavItem("/customers")}
      />
      <Navigation.Item
        label="Communications"
        icon={ChatMajor}
        onClick={() => toggleExpandedItem(1)}
      />
      <Collapsible id="collapsable-1" open={expandedItems.includes(1)}>
        <StyledSubNav>
          <Navigation.Section
            items={[
              {
                label: "Email",
                url: "/communications/email",
                disabled: false,
                selected: isActiveNavItem("/communications/email"),
              },
              {
                label: "SMS",
                url: "/communications/sms",
                selected: isActiveNavItem("/communications/sms"),
                disabled: false,
              },
            ]}
          />
        </StyledSubNav>
      </Collapsible>
      <Navigation.Item
        label="Website Display"
        icon={ViewMajor}
        onClick={() => toggleExpandedItem(2)}
      />
      <Collapsible id="collapsable-2" open={expandedItems.includes(2)}>
        <StyledSubNav>
          <Navigation.Section
            items={[
              {
                label: "Widget",
                url: "/display/widget",
                disabled: false,
                selected: isActiveNavItem("/display/widget"),
              },
              {
                label: "Landing Page",
                url: "/display/landing-page",
                disabled: false,
                selected: isActiveNavItem("/display/landing-page"),
              },
              {
                label: "Accounts Page",
                url: "/display/account",
                disabled: false,
                selected: isActiveNavItem("/display/account"),
              },
              {
                label: "Popups",
                url: "/display/popup",
                disabled: false,
                selected: isActiveNavItem("/display/popup"),
              },
            ]}
          />
        </StyledSubNav>
      </Collapsible>
      <Navigation.Item
        label="Branding"
        icon={ColorsMajor}
        onClick={() => toggleExpandedItem(3)}
      />
      <Collapsible id="collapsable-3" open={expandedItems.includes(3)}>
        <StyledSubNav>
          <Navigation.Section
            items={[
              {
                label: "Email Design",
                disabled: false,
                url: "/branding/emails",
                selected: isActiveNavItem("/branding/emails"),
              },
            ]}
          />
        </StyledSubNav>
      </Collapsible>
      <Navigation.Item
        label="Integrations"
        icon={CodeMajor}
        url="/integrations"
        selected={isActiveNavItem("/integrations")}
      />
      <Navigation.Section
        title="SUPPORT"
        items={[
          {
            label: "Help Center",
            url: "/help-center",
            icon: QuestionMarkInverseMajor,
            selected: isActiveNavItem("/help-center"),
          },
          {
            label: "Feedback",
            url: "/feedback",
            icon: ThumbsUpMajor,
            selected: isActiveNavItem("/feedback"),
          },
          {
            label: "Live Chat",
            url: "/chat",
            icon: ChatMajor,
            selected: isActiveNavItem("/chat"),
          },
        ]}
      />
      <Navigation.Section
        items={[
          {
            label: "Settings",
            url: "/settings",
            icon: SettingsMajor,
            selected: isActiveNavItem("/settings"),
          },
        ]}
      />
    </Navigation>
  );

  const logo = {
    width: 124,
    url: "/",
    topBarSource: MainLogo,
    contextualSaveBarSource: MainLogo,
    accessibilityLabel: "Loyalty App",
  };

  return (
    <Frame
      topBar={topBarMarkup}
      logo={logo}
      navigation={navigationMarkup}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
    >
      <div style={{ background: "var(--p-color-bg-app)", height: "100%" }}>
        <Box paddingBlockEnd="24">{children}</Box>
      </div>
    </Frame>
  );
};

export default MainLayout;
