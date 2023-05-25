import { useContext } from 'react';
import Block from '../Block';
import Tier from '../Tier';
import { ConfigContext } from '../../../../../App';

import styles from './index.module.css';

const VIPTiers = ({ setPage, loggedIn }) => {
  const { config } = useContext(ConfigContext);

  return (
    <Block>
      <h3
        className={styles.headTitle}
        style={{ color: `#${config.textsTitle}` }}
      >
        {!loggedIn ? config.tiersTitle : 'Vip status'}
      </h3>
      <p
        className={styles.subheader}
        style={{ color: `#${config.textsDescription}` }}
      >
        {!loggedIn ? config.tiersSubtitle : 'Earn 250 Points to Unlock Silver'}
      </p>
      <div onClick={() => setPage('bronze')}>
        <Tier>
          <span>
            <svg
              className='li-img'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              fill={`#${config.iconColor}`}
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 15.9C15.2822 15.4367 17 13.419 17 11V4H7V11C7 13.419 8.71776 15.4367 11 15.9V18H9V20H15V18H13V15.9ZM9 6H15V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V6Z'
              ></path>
              <path d='M18 6H20V11H18V6Z'></path>
              <path d='M6 6H4V11H6V6Z'></path>
            </svg>
          </span>{' '}
          <div>
            Bronze
            <p style={{ color: `#${config.textsDescription}` }}>
              Earn 250 points
            </p>
          </div>
        </Tier>
      </div>
      {!loggedIn && (
        <>
          <div onClick={() => setPage('silver')}>
            <Tier>
              <span>
                <svg
                  className='li-img'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  fill={`#${config.iconColor}`}
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M13 15.9C15.2822 15.4367 17 13.419 17 11V4H7V11C7 13.419 8.71776 15.4367 11 15.9V18H9V20H15V18H13V15.9ZM9 6H15V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V6Z'
                  ></path>
                  <path d='M18 6H20V11H18V6Z'></path>
                  <path d='M6 6H4V11H6V6Z'></path>
                </svg>
              </span>{' '}
              <div>
                Silver
                <p style={{ color: `#${config.textsDescription}` }}>
                  Earn 750 points
                </p>
              </div>
            </Tier>
          </div>
          <div onClick={() => setPage('gold')}>
            <Tier>
              <span>
                <svg
                  className='li-img'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  fill={`#${config.iconColor}`}
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M13 15.9C15.2822 15.4367 17 13.419 17 11V4H7V11C7 13.419 8.71776 15.4367 11 15.9V18H9V20H15V18H13V15.9ZM9 6H15V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V6Z'
                  ></path>
                  <path d='M18 6H20V11H18V6Z'></path>
                  <path d='M6 6H4V11H6V6Z'></path>
                </svg>
              </span>{' '}
              <div>
                Gold
                <p style={{ color: `#${config.textsDescription}` }}>
                  Earn 1,500 points
                </p>
              </div>
            </Tier>
          </div>
          <div onClick={() => setPage('platinum')}>
            <Tier>
              <span>
                <svg
                  className='li-img'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  fill={`#${config.iconColor}`}
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M13 15.9C15.2822 15.4367 17 13.419 17 11V4H7V11C7 13.419 8.71776 15.4367 11 15.9V18H9V20H15V18H13V15.9ZM9 6H15V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V6Z'
                  ></path>
                  <path d='M18 6H20V11H18V6Z'></path>
                  <path d='M6 6H4V11H6V6Z'></path>
                </svg>
              </span>{' '}
              <div>
                Platinum
                <p style={{ color: `#${config.textsDescription}` }}>
                  Earn 5,000 points
                </p>
              </div>
            </Tier>
          </div>
        </>
      )}
    </Block>
  );
};

export default VIPTiers;
