import React from 'react';
import { usePopup } from 'hooks/index';

import styles from './event.module.scss';

interface IEventProps {
  height: number;
  top: number;
  title: string;
  time: string;
  color: string;
  id: string;
  width: string;
  left: string;
}

const Event = ({
  height,
  top,
  title,
  time,
  color,
  id,
  width,
  left,
}: IEventProps) => {
  const { openPopup } = usePopup();

  const eventStyle = {
    height: height > 0 ? height : 'auto',
    top,
    background: color,
    width,
    left,
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    const { clientX, clientY } = e;
    openPopup({ x: clientX, y: clientY, eventId: id });
  };

  return (
    <div style={eventStyle} className={styles.event} onClick={handleClick}>
      <div className={styles.event__title}>{title}</div>
      <div className={styles.event__time}>{time}</div>
    </div>
  );
};

export default Event;
