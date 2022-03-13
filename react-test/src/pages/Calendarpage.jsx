import React from 'react';
import Calendar from '../components/calendar/Calendar';

function Calendarpage() {
  const now = new Date();
  return (
    <Calendar year={now.getFullYear()} month={now.getMonth() + 1} day={now.getDate()} />
  );
}
export default Calendarpage;
