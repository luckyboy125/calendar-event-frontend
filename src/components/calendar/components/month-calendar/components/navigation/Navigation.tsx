import React from 'react';
import { IWeekDay } from 'types/date';

import styles from './navigation.module.scss';

interface NavigationProps {
  weekDaysNames: IWeekDay[];
}

const Navigation = ({ weekDaysNames }: NavigationProps) => {
  return (
    <header className={styles.calendar__header}>
      {weekDaysNames.map((day, i) => {
        return (
          <div className={styles.calendar__day__label} key={i}>
            {day.dayShort}
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
