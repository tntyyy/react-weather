import React, { useEffect, useState } from 'react';

import { getTimeOfDay } from '../../utils';
import { handlerSwipeStart, handlerSwipeMove, handlerSwipeEnd } from '../../utils/swipes';

import styles from './Wrapper.module.css';

interface IWrapper {
  children: JSX.Element[] | JSX.Element;
}

const Wrapper: React.FC<IWrapper> = ({ children }) => {
  const [timeOfDay, setTimeOfDay] = useState<string | undefined>('');
  const [isOpenMenu, setIsOpenMenu] = useState<boolean | undefined>(false); 

  useEffect(() => {
    const time = getTimeOfDay(new Date().getHours());
    setTimeOfDay(time);
  }, []);

  return (
    <main
      className={styles.wrapper}
      style={{ backgroundImage: `url(/static/${timeOfDay ? timeOfDay : 'noon'}.jpg)` }}
      onTouchStart={(e) => handlerSwipeStart(e)}
      onTouchMove={(e) => handlerSwipeMove(e)}
      onTouchEnd={(e) => setIsOpenMenu(handlerSwipeEnd(e))}
    >
      {children}
      {
        isOpenMenu && <h1>Открыто</h1>
      }
    </main>
  );
};

export default Wrapper;
