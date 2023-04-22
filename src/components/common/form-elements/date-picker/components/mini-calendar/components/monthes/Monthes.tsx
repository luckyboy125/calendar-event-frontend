import React from 'react';
import { IModes, IMonth, TMonth } from 'types/date';
import Month from '../month/Month';

import styles from './monthes.module.scss';

interface MonthesProps {
  monthesNames: IMonth[];
  selectedYear: number;
  selectedMonth: TMonth;
  setSelectedMonthByIndex: (monthIndex: number) => void;
  setMode: (mode: IModes) => void;
}

const Monthes = ({
  monthesNames,
  selectedYear,
  selectedMonth,
  setSelectedMonthByIndex,
  setMode,
}: MonthesProps) => {
  return (
    <div className={styles.monthes__container}>
      {monthesNames.map((monthesName) => (
        <Month
          key={monthesName.month}
          monthesName={monthesName}
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          setSelectedMonthByIndex={setSelectedMonthByIndex}
          setMode={setMode}
        />
      ))}
    </div>
  );
};

export default Monthes;
