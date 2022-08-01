import React from 'react';

import styles from './City.module.css';

interface ICity {
  city: string;
}

const City: React.FC<ICity> = ({ city }) => {
  return <h2 className={styles.city}>{city}</h2>;
};

export default City;
