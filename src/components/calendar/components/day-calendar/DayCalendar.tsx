import React from 'react';
import { useTypedSelector } from 'hooks/index';
import { IMonthDay } from 'types/date';
import Navigation from './components/navigation/Navigation';
import Sidebar from './components/sidebar/Sidebar';

import styles from './day-calendar.module.scss';
import Day from './components/day/Day';
import { shmoment } from 'utils/date';

interface IDayCalendarProps {
  day: IMonthDay;
}

const DayCalendar = ({ day }: IDayCalendarProps) => {
  const { events } = useTypedSelector(({ events }) => events);

  const nextDay = shmoment(day.date).add('days', 1).result();

  // getting all events from the current day we will render
  const dayEvents = events?.filter((event) => {
    const eventStartDate = new Date(event.start);
    const eventEndDate = new Date(event.end);

    return (
      eventStartDate.getTime() > day.date.getTime() &&
      eventEndDate.getTime() < nextDay.getTime()
    );
  });

  const prevDayEvents = events?.filter((event) => {
    const eventStartDate = new Date(event.start);
    const eventEndDate = new Date(event.end);

    return (
      day.date.getTime() <= eventEndDate.getTime() &&
      day.date.getTime() > eventStartDate.getTime()
    );
  });

  const nextDayEvents = events?.filter((event) => {
    const eventStartDate = new Date(event.start);
    const eventEndDate = new Date(event.end);

    return (
      nextDay.getTime() > eventStartDate.getTime() &&
      nextDay.getTime() <= eventEndDate.getTime()
    );
  });

  return (
    <>
      <div className={styles.calendar__week__header__container}>
        <Navigation day={day} />
      </div>
      <div className='calendar__body'>
        <div className={styles.calendar__week__container}>
          <Sidebar />
          <Day
            key={day.dayNumber}
            dayEvents={dayEvents}
            prevDayEvents={prevDayEvents}
            nextDayEvents={nextDayEvents}
            dayData={day}
          />
        </div>
      </div>
    </>
  );
};

export default DayCalendar;
