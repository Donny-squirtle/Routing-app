import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function EventList({ eventsList, removeEvent, cursor }) {
  const getNewRandomKey = useCallback((item, i) => encodeURI(`${item},${i}`), []);
  return (
    <ul>
      {
        eventsList.map((item, i) => (
          <li key={getNewRandomKey(item, i)}>
            {item}
            <button type="button" onClick={() => { removeEvent(cursor, i); }}>–</button>
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
