import { useContext } from 'react';

import Block from '../Block';
import Tier from '../Tier';
import { ConfigContext } from '../../../../../App';

import styles from './index.module.css';
import { Divider } from '@shopify/polaris';

const EarnPoints = ({ setPage, loggedIn }) => {
  const { config } = useContext(ConfigContext);

  return (
    <Block config={config}>
      <h3
        className={styles.headTitle}
        style={{ color: `#${config.textsTitle}` }}
      >
        {!loggedIn ? config.earnTitle : '500 Points'}
      </h3>
      {!loggedIn && (
        <p
          className={styles.subheader}
          style={{ color: `#${config.textsDescription}` }}
        >
          {config.earnSubtitle}
        </p>
      )}
      {loggedIn && (
        <>
          <div>
            <p
              className={styles.subheader}
              style={{ color: `#${config.textsDescription}` }}
            >
              Upcoming Reward
            </p>
            <Tier noLink>
              <span>
                <svg
                  width='26'
                  height='26'
                  xmlns='http://www.w3.org/2000/svg'
                  fill={`#${config.iconColor}`}
                >
                  <path d='M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z'></path>
                </svg>
              </span>{' '}
              <div>
                Free Product
                <p style={{ color: `#${config.textsDescription}` }}>
                  500 Points
                </p>
              </div>
            </Tier>
          </div>
          <br />
          <Divider />
          <br />
        </>
      )}
      <div onClick={() => setPage('earn')}>
        <Tier>
          <span>
            <svg
              width='26'
              height='26'
              xmlns='http://www.w3.org/2000/svg'
              fill={`#${config.iconColor}`}
            >
              <path d='M19.5 10c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-6.527 4.593c-1.108 1.086-2.275 2.219-3.473 3.407-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 .746-.156 1.496-.423 2.253-.527-.427-1.124-.768-1.769-1.014.122-.425.192-.839.192-1.239 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.109-2.064c.376.557.839 1.048 1.364 1.465z'></path>
            </svg>
          </span>{' '}
          {config.earnButton1}
        </Tier>
      </div>

      <div onClick={() => setPage('redeem')}>
        <Tier>
          <span>
            <svg
              width='26'
              height='26'
              xmlns='http://www.w3.org/2000/svg'
              fill={`#${config.iconColor}`}
            >
              <path d='M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z'></path>
            </svg>
          </span>{' '}
          {config.earnButton2}
        </Tier>
      </div>
    </Block>
  );
};
export default EarnPoints;
