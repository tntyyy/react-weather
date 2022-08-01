import React, { useEffect, useState } from 'react';

import { getTimeOfDay } from '../../utils';

import styles from './Wrapper.module.css';

interface IWrapper {
  children: JSX.Element[] | JSX.Element;
}

const Wrapper: React.FC<IWrapper> = ({ children }) => {
  const [timeOfDay, setTimeOfDay] = useState<string | undefined>('');

  useEffect(() => {
    const time = getTimeOfDay(new Date().getHours());
    setTimeOfDay(time);
  }, []);

  return (
    <main
      className={styles.wrapper}
      style={{ backgroundImage: `url(/static/${timeOfDay ? timeOfDay : 'noon'}.jpg)` }}
    >
      {children}
    </main>
  );
};

export default Wrapper;
