import React from 'react';
import './homepage.css';

function Homepage() {
  return (
    <>
      <h1>Homepage</h1>
      <div className="home-page">
        <div className="home-page__img" />
        <div className="home-page__main">
          <h2 className="home-page__main-title">The pet progect of talanted front-end developer</h2>
          <p className="home-page__main-text">About me:</p>
          <p className="home-page__main-text">My name is Daniil and im junior front-end developer.</p>
          <p className="home-page__main-text">
            I graduated from Belarusian State University
            and got a diploma of Radiophysics and computer security specialist.
            Dont let that bother you, when I entered the university
            I thought it would be interesting,
            but life took a different turn and I became interested in front-end development.
          </p>
          <p className="home-page__main-text">
            I would like to apply my technical skills and knowledge in the Front-end Development
            for creating high quality products which will be matching clients expectations.
            I have good knowledge basement (if I dont know something, I can google it),
            ability to learn fast and fulfill objectives.
            I constantly improve my skills and trying to be aware of new trends in IT.
            I can be effective and helpful for your company.
          </p>
        </div>

      </div>

    </>

  );
}
export default Homepage;
