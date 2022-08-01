import React from 'react';

import styles from './WeatherDescription.module.css';

interface IWeatherDescription {
  description: string;
}

const WeatherDescription: React.FC<IWeatherDescription> = ({ description }) => {
  return <p className={styles.description}>{description}</p>;
};

export default WeatherDescription;
