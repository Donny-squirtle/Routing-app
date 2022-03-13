import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function EventList({ eventsList, removeEvent, cursor }) {
  const getNewRandomKey = useCallback((item, i) => encodeURI(`${item},${i}`), []);
  return (
    <ul className="day-events">
      {
        eventsList.map((item, i) => (
          <li className="day-events__item" key={getNewRandomKey(item, i)}>
            {item}
            <button className="day-events__btn" type="button" onClick={() => { removeEvent(cursor, i); }}>–</button>
          </li>
        ))
        }
    </ul>
  );
}
EventList.propTypes = {
  eventsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeEvent: PropTypes.func.isRequired,
  cursor: PropTypes.string.isRequired,
};

export default EventList;
