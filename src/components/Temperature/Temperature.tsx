import React from 'react';

import styles from './Temperature.module.css';

interface ITemp {
  temp: number | string;
}

const Temperature: React.FC<ITemp> = ({ temp }) => {
  return <h1 className={styles.temperature}>{temp}°</h1>;
};

export default Temperature;
