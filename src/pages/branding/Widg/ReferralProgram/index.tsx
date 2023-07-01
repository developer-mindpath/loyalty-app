import Block from "../Block";
import { useContext, useRef } from "react";
// import { ConfigContext } from '../../../../../App';
import { DuplicateMinor } from "@shopify/polaris-icons";
import { Icon } from "@shopify/polaris";

import styles from "./index.module.css";

const ReferralProgram = ({ loggedIn }: { loggedIn: boolean }) => {
  // const { config } = useContext(ConfigContext);
  const referInput = useRef(null);
  const config = {
    textsTitle: "000000", // Example: "000000", "FFFFFF", "FF00FF"
    textsDescription: "888888", // Example: "888888", "AAAAAA", "00FFFF"
    referralTitle: "Referral Program", // Example: "Referral Program", "Invite Friends", "Share and Earn"
    referralSubtitle: "Refer friends and earn rewards", // Example: "Refer friends and earn rewards", "Invite your friends and get discounts", "Share and get benefits"
    referralText1: "Text 1", // Example: "Text 1", "Benefit 1", "Reward 1"
    referralText2: "Text 2", // Example: "Text 2", "Benefit 2", "Reward 2"
    iconColor: "FF0000", // Example: "FF0000", "00FF00", "0000FF"
  };

  return !loggedIn ? (
    <Block>
      <h3
        className={styles.headTitle}
        style={{ color: `#${config.textsTitle}` }}
      >
        {config.referralTitle}
      </h3>
      <p
        className={styles.subheader}
        style={{ color: `#${config.textsDescription}` }}
      >
        {config.referralSubtitle}
      </p>
      <div className={styles.referralItems}>
        <div className={styles.referralItem}>{config.referralText1}</div>
        <div className={styles.referralItem}>{config.referralText2}</div>
      </div>
    </Block>
  ) : (
    <Block>
      <h3
        className={styles.headTitle}
        style={{ color: `#${config.textsTitle}` }}
      >
        Refer friends and earn
      </h3>
      <p
        className={styles.subheader}
        style={{ color: `#${config.textsDescription}` }}
      >
        Share this link with a friend for them to claim the reward $10 off
        coupon
      </p>
      <div className={styles.clipboard}>
        <input
          ref={referInput}
          className={styles.referInput}
          type="text"
          value="https://www.kodiak-wholesale.com/refer/123123123"
          disabled
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText("");
          }}
        >
          <Icon source={DuplicateMinor} />
        </button>
      </div>
      <div className={styles.referLinks}>
        <a href="#">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={`#${config.iconColor}`}
          >
            <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
          </svg>
        </a>
        <a href="#">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={`#${config.iconColor}`}
          >
            <path d="M0 5.324v10.176a1.5 1.5 0 0 0 1.5 1.5h17a1.5 1.5 0 0 0 1.5-1.5v-10.176l-9.496 5.54a1 1 0 0 1-1.008 0l-9.496-5.54z"></path>
            <path d="M19.443 3.334a1.494 1.494 0 0 0-.943-.334h-17a1.49 1.49 0 0 0-.943.334l9.443 5.508 9.443-5.508z"></path>
          </svg>
        </a>
      </div>
    </Block>
  );
};
export default ReferralProgram;
