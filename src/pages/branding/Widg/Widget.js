import { Divider } from "@shopify/polaris";
import Block from "./Block";
import EarnPoints from "./EarnPoints";
import ReferralProgram from "./ReferralProgram";
import Header from "./Header";
import styles from "./index.module.css";
import VIPTiers from "./VIPTiers";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Tier from "./Tier";

const Widget = ({ config }) => {
  const [page, setPage] = useState("default");
  const [loggedIn, setLoggedIn] = useState(false);

  const maxHeight = `calc(100vh - ${parseInt(
    config.launcherPadding * 3
  )}px - 56px)`;

  return (
    <div
      style={{
        borderRadius: parseInt(config.widgetRadius),
        color: "#fff",
        fontFamily: `${config.fontSecondary}, Helvetica, Arial, sans-serif`,
        maxHeight: maxHeight,
      }}
      className={styles.widget}
    >
      <Helmet>
        <style type="text/css">{`
          @import
          url('https://fonts.googleapis.com/css2?family=${config.fontPrimary}:wght@400;600&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=${config.fontSecondary}:wght@400;600&display=swap');
        `}</style>
        <style type="text/css">{`
          ${config.customCSS}
        `}</style>
      </Helmet>

      <Header
        config={config}
        page={page}
        setPage={setPage}
        loggedIn={loggedIn}
      />

      {page === "default" && !loggedIn && (
        <Block>
          <h3
            className={styles.headTitle}
            style={{
              color: `#${config.textsTitle}`,
            }}
          >
            {config.joinBlockTitle}
          </h3>
          <button
            style={{
              borderRadius: parseInt(config.buttonsRadius),
              backgroundColor: `#${config.buttonBg}`,
              color: `#${config.buttonColor}`,
              fontFamily: `${config.fontSecondary}, Helvetica, Arial, sans-serif`,
            }}
            className={styles.widgetBtn}
            size="large"
            onClick={() => setLoggedIn(true)}
          >
            {config.joinBlockButtonText}
          </button>
          <Divider />
          <p
            className={styles.signIn}
            style={{ color: `#${config.textsDescription}` }}
          >
            {config.joinBlockFooterText}{" "}
            <a
              href="#"
              style={{ color: `#${config.linkColor}` }}
              onClick={() => setLoggedIn(true)}
            >
              Sign in
            </a>
          </p>
        </Block>
      )}

      {page === "default" &&
        config.panelsOrder.map((item, index) => {
          if (item === "Earn Points")
            return (
              <EarnPoints key={index} setPage={setPage} loggedIn={loggedIn} />
            );
          if (item === "Referral Program")
            return <ReferralProgram key={index} loggedIn={loggedIn} />;
          if (item === "VIP Tiers")
            return (
              <VIPTiers key={index} setPage={setPage} loggedIn={loggedIn} />
            );
        })}

      {page === "earn" && (
        <Block>
          <h3 className={styles.headTitle}>Ways to earn</h3>
          <br />
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // fill={`#${config.iconColor}`}
              >
                <path
                  d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>{" "}
            <div>
              Complete a Referral
              <p style={{ color: `#${config.textsDescription}` }}>
                1,500 Points for every referral completed
              </p>
            </div>
          </Tier>
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                height="24"
                viewBox="0 0 32 32"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 3"
                fill={`#${config.iconColor}`}
              >
                <path d="m23.479 29.691a2.325 2.325 0 0 1 -1.089-.27l-6.233-3.276a.333.333 0 0 0 -.314 0l-6.232 3.276a2.338 2.338 0 0 1 -3.393-2.465l1.19-6.939a.337.337 0 0 0 -.1-.3l-5.038-4.917a2.338 2.338 0 0 1 1.3-3.989l6.963-1.011a.337.337 0 0 0 .254-.185l3.113-6.315a2.337 2.337 0 0 1 4.193 0l3.115 6.313a.34.34 0 0 0 .254.185l6.969 1.012a2.339 2.339 0 0 1 1.3 3.989l-5.043 4.914a.339.339 0 0 0 -.1.3l1.19 6.939a2.341 2.341 0 0 1 -2.3 2.735zm-7.479-5.586a2.325 2.325 0 0 1 1.088.27l6.232 3.275a.321.321 0 0 0 .356-.025.325.325 0 0 0 .135-.331l-1.191-6.94a2.343 2.343 0 0 1 .672-2.069l5.043-4.915a.338.338 0 0 0 -.188-.576l-6.968-1.013a2.335 2.335 0 0 1 -1.76-1.279l-3.119-6.314a.338.338 0 0 0 -.606 0l-3.113 6.312a2.335 2.335 0 0 1 -1.761 1.279l-6.967 1.015a.337.337 0 0 0 -.187.576l5.042 4.915a2.343 2.343 0 0 1 .672 2.069l-1.191 6.94a.338.338 0 0 0 .492.356l6.231-3.276a2.335 2.335 0 0 1 1.088-.269z"></path>
              </svg>
            </span>{" "}
            <div>
              Post a product review
              <p style={{ color: `#${config.textsDescription}` }}>
                250 Points for every review posted
              </p>
            </div>
          </Tier>
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill={`#${config.iconColor}`}
              >
                <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
              </svg>
            </span>{" "}
            <div>
              Share link on Facebook
              <p style={{ color: `#${config.textsDescription}` }}>200 Points</p>
            </div>
          </Tier>
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
                fill={`#${config.iconColor}`}
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"></path>
              </svg>
            </span>{" "}
            <div>
              Sign Up
              <p style={{ color: `#${config.textsDescription}` }}>500 Points</p>
            </div>
          </Tier>
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
                fill={`#${config.iconColor}`}
              >
                <path d="M10.975 8l.025-.5c0-.517-.066-1.018-.181-1.5h5.993l-.564 2h-5.273zm-2.475 10c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-10.428l-.455-1.083c-.324.049-.652.083-.99.083-.407 0-.805-.042-1.191-.114l1.306 3.114h13.239l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-9-15c-2.486 0-4.5 2.015-4.5 4.5s2.014 4.5 4.5 4.5c2.484 0 4.5-2.015 4.5-4.5s-2.016-4.5-4.5-4.5zm-.469 6.484l-1.687-1.636.695-.697.992.94 2.115-2.169.697.696-2.812 2.866z"></path>
              </svg>
            </span>{" "}
            <div>
              Place an order
              <p style={{ color: `#${config.textsDescription}` }}>
                2 Points for every $1 you spend
              </p>
            </div>
          </Tier>
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
                fill={`#${config.iconColor}`}
              >
                <path d="M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z"></path>
              </svg>
            </span>{" "}
            <div>
              Celebrate a birthday
              <p style={{ color: `#${config.textsDescription}` }}>300 Points</p>
            </div>
          </Tier>
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill={`#${config.iconColor}`}
              >
                <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
              </svg>
            </span>{" "}
            <div>
              Like page on Facebook
              <p style={{ color: `#${config.textsDescription}` }}>100 Points</p>
            </div>
          </Tier>
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill={`#${config.iconColor}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                ></path>
                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                ></path>
              </svg>
            </span>{" "}
            <div>
              Follow on instagram
              <p style={{ color: `#${config.textsDescription}` }}>100 Points</p>
            </div>
          </Tier>
        </Block>
      )}

      {page === "redeem" && (
        <Block>
          <h3 className={styles.headTitle}>Ways to redeem</h3>
          <br />
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
                fill={`#${config.iconColor}`}
              >
                <path d="M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z"></path>
              </svg>
            </span>{" "}
            <div>
              Free product
              <p style={{ color: `#${config.textsDescription}` }}>500 Points</p>
            </div>
          </Tier>
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
                fill={`#${config.iconColor}`}
              >
                <path d="M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z"></path>
              </svg>
            </span>{" "}
            <div>
              $5 off coupon
              <p style={{ color: `#${config.textsDescription}` }}>500 Points</p>
            </div>
          </Tier>
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
                fill={`#${config.iconColor}`}
              >
                <path d="M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z"></path>
              </svg>
            </span>{" "}
            <div>
              $10 off coupon
              <p style={{ color: `#${config.textsDescription}` }}>
                1,000 Points
              </p>
            </div>
          </Tier>
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
                fill={`#${config.iconColor}`}
              >
                <path d="M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z"></path>
              </svg>
            </span>{" "}
            <div>
              $20 off coupon
              <p style={{ color: `#${config.textsDescription}` }}>
                2,000 Points
              </p>
            </div>
          </Tier>
          <Tier noLink={!loggedIn}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
                fill={`#${config.iconColor}`}
              >
                <path d="M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z"></path>
              </svg>
            </span>{" "}
            <div>
              $30 off coupon
              <p style={{ color: `#${config.textsDescription}` }}>
                3,000 Points
              </p>
            </div>
          </Tier>
        </Block>
      )}

      {page === "bronze" && (
        <Block>
          <h3 className={styles.headTitle}>Bronze</h3>
          <br />
          <p
            style={{
              color: `#${config.textsDescription}`,
              textAlign: "center",
            }}
          >
            Earn 0 Points
          </p>
          <br />
          <Divider />
          <br />
        </Block>
      )}

      {page === "silver" && (
        <Block>
          <h3 className={styles.headTitle}>Silver</h3>
          <br />
          <p
            style={{
              color: `#${config.textsDescription}`,
              textAlign: "center",
            }}
          >
            Earn 700 Points
          </p>
          <br />
          <Divider />
          <br />
          <p>
            <strong>Rewards:</strong>
            <br /> &#x2022; $10 off coupon
          </p>
          <br />
        </Block>
      )}

      {page === "gold" && (
        <Block>
          <h3 className={styles.headTitle}>Gold</h3>
          <br />
          <p
            style={{
              color: `#${config.textsDescription}`,
              textAlign: "center",
            }}
          >
            Earn 1,500 Points
          </p>
          <br />
          <Divider />
          <br />
          <p>
            <strong>Rewards:</strong>
            <br /> &#x2022; $100 off coupon
          </p>
          <br />
          <p>
            <strong>Perks:</strong>
            <br /> &#x2022; Early Access to New Products
          </p>
          <br />
        </Block>
      )}

      {page === "platinum" && (
        <Block>
          <h3 className={styles.headTitle}>Platinum</h3>
          <br />
          <p
            style={{
              color: `#${config.textsDescription}`,
              textAlign: "center",
            }}
          >
            Earn 5,000 Points
          </p>
          <br />
          <Divider />
          <br />
          <p>
            <strong>Rewards:</strong>
            <br /> &#x2022; $150 off coupon
          </p>
          <br />
          <p>
            <strong>Perks:</strong>
            <br /> &#x2022; Receive Your Orders Faster - Orders Pushed to Top of
            Production
            <br /> &#x2022; VIP Early Access to New Products
          </p>
          <br />
        </Block>
      )}

      {config.showBranding && (
        <p className={styles.signIn}>Powered by Kodiak Coolers</p>
      )}
    </div>
  );
};

export default Widget;
