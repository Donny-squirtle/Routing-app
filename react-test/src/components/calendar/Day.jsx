import React from 'react';
import PropTypes from 'prop-types';
import EventList from './EventList';

function Day({
  selected, hasEvents, hasMatches, day, setDay, eventsList, removeEvent, cursor, editEvent,
}) {
  let cls = (selected) ? ' day-active' : '';
  if (hasEvents) cls += ' has-events';
  if (hasMatches) cls += ' has-matches';
  return (
    day > 0
      ? (
        <div className={`day${cls}`} aria-hidden="true" onClick={(e) => setDay(day, e)}>
          {day}
          {eventsList.length > 0 && (
            <EventList
              cursor={cursor}
              eventsList={eventsList}
              removeEvent={removeEvent}
              editEvent={editEvent}
            />
          )}
        </div>
      )
      : (<div className="day day-empty" />)
  );
}
Day.propTypes = {
  selected: PropTypes.bool,
  hasEvents: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  hasMatches: PropTypes.bool,
  day: PropTypes.number.isRequired,
  setDay: PropTypes.func,
  eventsList: PropTypes.arrayOf(PropTypes.string),
  removeEvent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number,
  ]),
  cursor: PropTypes.string,
  editEvent: PropTypes.func,
};
Day.defaultProps = {
  selected: undefined,
  hasEvents: undefined,
  hasMatches: undefined,
  setDay: undefined,
  eventsList: undefined,
  removeEvent: undefined,
  cursor: undefined,
  editEvent: undefined,
};

export default Day;
