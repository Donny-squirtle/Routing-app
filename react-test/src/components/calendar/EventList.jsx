import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ButtonDeleteIcon from '../icons/ButtonDeleteIcon';
import ButtonAddIcon from '../icons/ButtonAddIcon';

function EventList({
  eventsList, removeEvent, cursor, editEvent,
}) {
  const getNewRandomKey = useCallback((item, i) => encodeURI(`${item},${i}`), []);
  return (
    <ul className="day-events">
      {
        eventsList.map((item, i) => (
          <li className="day-events__item" key={getNewRandomKey(item, i)}>
            <p className="day-events__item-text">{item}</p>
            <div className="day-events__buttons events-button">
              <button type="button" className="events-button__item events-button__item--edit" onClick={() => { editEvent(cursor, i); }}>
                <ButtonAddIcon width="20" height="20" stroke="#795AD8" />
              </button>
              <button type="button" className="events-button__item events-button__item--delete" onClick={() => { removeEvent(cursor, i); }}>
                <ButtonDeleteIcon width="20" height="20" fill="#FF6363" />
              </button>
            </div>
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
  editEvent: PropTypes.func.isRequired,
};

export default EventList;
