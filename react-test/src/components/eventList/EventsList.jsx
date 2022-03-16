import React, { useCallback } from 'react';
import './eventslist.css';

function EventList() {
  const eventData = JSON.parse(localStorage.getItem('events'));
  const getNewRandomKey = useCallback((item, i) => encodeURI(`${item},${i}`), []);
  return (
    <div>
      <h2>Your events</h2>
      {eventData ? (
        <ul className="event-list">
          {
            Object.keys(eventData).map((day, i) => (
              <li key={getNewRandomKey(day, i)} className="event-list__item">
                <p className="event-list__item-title">{day}</p>
                <ul className="event-list__sub-list sub-list">
                  {eventData[day].map((task) => (<li key={getNewRandomKey(task, i)} className="sub-list__item">{task}</li>))}
                </ul>
              </li>
            ))
        }
        </ul>
      ) : (
        <div>Event is empty</div>
      )}

    </div>
  );
}

export default EventList;
