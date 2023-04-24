import React from 'react';
import cn from 'classnames';
import { checkIsToday, checkIsPast } from 'utils/date';
import { IMonthDay } from 'types/date';
import { useModal } from 'hooks/useModal';

import styles from './navigation.module.scss';

interface INavigationProps {
  day: IMonthDay;
}

const Navigation = ({ day }: INavigationProps) => {
  const { openModalCreate } = useModal();

  const { dayNumber, year, monthIndex, date } = day;
  const uniqKey = `${year}-${monthIndex}-${dayNumber}`;

  const isPastDay = checkIsPast(date);
  const isTodayDay = checkIsToday(date);

  return (
    <header className={styles.week__header}>
      <div
        className={styles.day__label}
        key={uniqKey}
        onClick={() =>
          openModalCreate({
            selectedDate: day.date,
            type: 'long-event',
          })
        }
      >
        <span
          className={cn(styles.day__label__number, {
            [styles.day__label__number_today]: isTodayDay,
            [styles.day__label__number_past]: isPastDay,
          })}
        >
          {dayNumber}
        </span>
      </div>
    </header>
  );
};

export default Navigation;
