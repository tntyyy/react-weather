import React, { useEffect, useState } from 'react';

import { getTimeOfDay } from '../../utils';

import styles from './Wrapper.module.css';

interface IWrapper {
  children: JSX.Element[] | JSX.Element;
}

const Wrapper: React.FC<IWrapper> = ({ children }) => {
  const [timeOfDay, setTimeOfDay] = useState<string | undefined>('');
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false); 

  let startX: number, startY: number, endingX: number, endingY: number;
  let moving: boolean = false;

  const handlerSwipeStart = (e: any) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }

  const handlerSwipeMove = (e: any) => {
    moving = true;
    endingX = e.touches[0].clientX;
    endingY = e.touches[0].clientY;
  }

  const handlerSwipeEnd = (e: any) => {
    if (!moving) return;
    let touchDirection;
    if (!( Math.abs(endingX - startX) > Math.abs(endingY - startY))) {
        if ( endingY > startY ) {
          setIsOpenMenu(false);
        } else {
          setIsOpenMenu(true); //свапй открытия
        }
    }
    moving = false;
  }

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
      onTouchEnd={(e) => handlerSwipeEnd(e)}
    >
      {children}
      {
        isOpenMenu && <h1>Открыто</h1>
      }
    </main>
  );
};

export default Wrapper;
