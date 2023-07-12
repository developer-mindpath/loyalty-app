import Block from "../Block";
import { useContext, useRef } from "react";
// import { ConfigContext } from '../../../../../App';
import { DuplicateMinor } from "@shopify/polaris-icons";
import { Icon } from "@shopify/polaris";

import styles from "./index.module.css";
import { useAppSelector } from "@/redux/hook";
import {
  getWidgetTextSettings,
  getWidgetSettings,
} from "@/redux/reducers/floatingWidget";

const ReferralProgram = ({ loggedIn }: { loggedIn: boolean }) => {
  const widget = useAppSelector(getWidgetSettings);
  const referInput = useRef(null);
  const config = {
    textsTitle: widget.widget_color_text_title, 
    textsDescription: widget.widget_color_text_description, 
    referralTitle: "Referral Program", 
    referralSubtitle:
      "Refer a friend who makes a purchase and both of you will claim rewards.", 
    referralText1: "They will get $10 off coupon", 
    referralText2: "You will get$20 off coupon", 
    iconColor: widget.widget_color_others_icon_color,
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
