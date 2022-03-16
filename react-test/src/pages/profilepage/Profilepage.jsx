import React from 'react';
import EventsList from '../../components/eventList/EventsList';
import './profilepage.css';

function Profilepage() {
  return (
    <div className="profile-page">
      <EventsList />
      <div className="user-information">
        <div className="user-information__main">
          <div className="user-information__text">
            <p>
              <span>Name: </span>
              ***
            </p>
            <p>
              <span>Age: </span>
              ***
            </p>
            <p>
              <span>About: </span>
              ***
            </p>
          </div>
          <div className="user-information__img">Image</div>
        </div>
        <div className="user-information__sub-block">
          <div className="user-information__text">
            <p>
              When half way through the journey of our life
              I found that I was in a gloomy wood,
              because the path which led aright was lost.
              And ah, how hard it is to say just what
              this wild and rough and stubborn woodland was,
              the very thought of which renews my fear!
              So bitter ’t is, that death is little worse;
              but of the good to treat which there I found,
              I ’ll speak of what I else discovered there.
            </p>
            <p>
              I cannot well say how I entered it,
              so full of slumber was I at the moment
              when I forsook the pathway of the truth;
              but after I had reached a mountain’s foot,
              where that vale ended which had pierced my heart
              with fear, I looked on high,
              and saw its shoulders
              mantled already with that planet’s rays
              which leadeth one aright o’er every path.
            </p>
          </div>
          <ul className="user-information__img-block user-img-block">
            <li className="user-img-block__item">Image</li>
            <li className="user-img-block__item">Image</li>
            <li className="user-img-block__item">Image</li>
            <li className="user-img-block__item">Image</li>
          </ul>
        </div>
      </div>
    </div>

  );
}
export default Profilepage;
