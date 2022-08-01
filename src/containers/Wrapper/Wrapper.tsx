import React, { Children } from 'react';

import Background from '../../static/night.jpg';

import styles from './Wrapper.module.css';

interface IWrapper {
  children: JSX.Element[] | JSX.Element;
}

const Wrapper: React.FC<IWrapper> = ({ children }) => {
  return (
    <main className={styles.wrapper} style={{ backgroundImage: `url(${Background}` }}>
      {children}
    </main>
  );
};

export default Wrapper;
