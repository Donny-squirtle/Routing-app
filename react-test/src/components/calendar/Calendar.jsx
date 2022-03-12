import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import Form from './Form';
import './calendar.css';

function Calendar({ day, month, year }) {
  const [currentMonth, setCurrentMonth] = useState(month - 1);
  const [currentYear, setCurrentYear] = useState(year);
  const [cursor, setCursor] = useState('');
  const [search, setSearch] = useState('');
  const [event, setEvent] = useState('');
  const [events, setEvents] = useState({});

  const getNewRandomKey = useCallback((item, i) => encodeURI(`${item},${i}`), []);

  const getMonthName = (idx) => ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'][idx];

  const formatDate = (dayFormat, monthFormat, yearFormat) => {
    const dayResult = (dayFormat.toString().length < 2) ? `0${dayFormat}` : dayFormat;
    let monthResult = monthFormat + 1;
    monthResult = (monthResult.toString().length < 2) ? `0${monthResult}` : monthResult;
    return `${dayResult}.${monthResult}.${yearFormat}`;
  };

  const setDate = (daySetter, monthSetter, yearSetter, e) => {
    if (e) e.preventDefault();
    const date = formatDate(daySetter, monthSetter, yearSetter);
    setCursor(date);
  };

  const setDay = (daySet, e) => {
    setDate(daySet, currentMonth, currentYear, e);
  };

  const resetDate = (e) => {
    e.preventDefault();
    setCurrentYear(year);
    setCurrentMonth(month - 1);
    setDate(day, month - 1, year);
  };

  const prevMonth = (e) => {
    e.preventDefault();
    const m = (currentMonth - 1 === -1) ? 11 : currentMonth - 1;
    const y = (m === 11) ? currentYear - 1 : currentYear;
    setCurrentYear(y);
    setCurrentMonth(m);
  };

  const nextMonth = (e) => {
    e.preventDefault();
    const m = (currentMonth + 1 === 12) ? 0 : currentMonth + 1;
    const y = (m === 0) ? currentYear + 1 : currentYear;
    setCurrentYear(y);
    setCurrentMonth(m);
  };

  const saveEvents = () => {
    localStorage.setItem('events', JSON.stringify(events));
  };

  const loadEvents = () => {
    const eventsStorage = localStorage.getItem('events');
    if (eventsStorage) setEvents(JSON.parse(eventsStorage));
  };

  const updateEvent = (e) => {
    setEvent(e);
  };

  const addEvent = (e) => {
    if (e) e.preventDefault();
    const eventDay = event.trim();
    if (!eventDay) return;
    const date = cursor;
    if (!events[date]) events[date] = [];
    events[date].push(eventDay);
    setEvent('');
    setEvents(events);
    saveEvents();
  };

  const removeEvents = (date) => {
    delete events[date];
    setEvents({ ...events });
    saveEvents();
  };

  const removeEvent = (date, idx) => {
    if (events[date]) {
      events[date].splice(idx, 1);
      if (!events[date].length) {
        removeEvents(date);
      } else {
        setEvents({ ...events });
        saveEvents();
      }
    }
  };

  useEffect(() => {
    setDate(day, month - 1, year);
    loadEvents();
  }, []);

  const date = new Date(currentYear, currentMonth, 1);
  const weekDay = (date.getDay() !== 0) ? date.getDay() : 7;

  date.setMonth(date.getMonth() + 1);
  date.setDate(1);
  date.setDate(date.getDate() - 1);
  const lastDay = date.getDate();

  const calendar = [];
  const start = weekDay - 1; const
    end = weekDay + lastDay - 1;
  for (let i = 0; i < 42; i += 1) {
    if (i >= start && i < end) {
      calendar[i] = i - weekDay + 2;
    } else {
      calendar[i] = '';
    }
  }

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((item, i) => (<div key={getNewRandomKey(item, i)} className="day">{item}</div>));
  const cursorDate = cursor.split('.');

  const days = calendar.map((item, idx) => {
    if (item) {
      const dateNow = formatDate(item, currentMonth, currentYear);

      const thisMonth = (currentMonth === Number(cursorDate[1] - 1))
                     && (currentYear === Number(cursorDate[2]));

      const selected = (item === Number(cursorDate[0])) && thisMonth;

      const hasEvents = thisMonth
            && (Array.isArray(events[dateNow]))
            && (events[dateNow].length);
      const eventsList = hasEvents ? events[dateNow] : [];

      let hasMatches = false;
      if (hasEvents && search) {
        for (let i = 0; i < eventsList.length; i += 1) {
          if (eventsList[i].includes(search)) {
            hasMatches = true; break;
          }
        }
      }
      return (
        <Day
          key={getNewRandomKey(item, idx)}
          day={item}
          selected={selected}
          hasEvents={hasEvents}
          hasMatches={hasMatches}
          setDay={setDay}
          eventsList={eventsList}
          removeEvent={removeEvent}
          cursor={cursor}
        />
      );
    }
    return (<Day key={getNewRandomKey(item, idx)} day={-1} />);
  });

  return (
    <>
      <h1>Calendar</h1>

      {/* New event */}
      <div className="event-add">
        <h2>Add new event</h2>
        <Form value={event} submit={addEvent} update={updateEvent} />
      </div>

      {/* Search */}
      <div className="search">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          value={search}
        />
      </div>

      <div className="calendar">
        {/* Month selector */}
        <div className="month">
          <div className="month-active">
            <b>{getMonthName(currentMonth)}</b>
            {` ${currentYear}`}
          </div>
          <div className="month-selector">
            <button className="prev" type="button" onClick={prevMonth}>⟵</button>
            <button className="reset" type="button" onClick={resetDate}>○</button>
            <button className="next" type="button" onClick={nextMonth}>⟶</button>
          </div>
        </div>
        {/* Days grid */}
        <div className="weekdays">{dayNames}</div>
        <div className="days">{days}</div>
      </div>
    </>
  );
}

Calendar.propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Calendar;
