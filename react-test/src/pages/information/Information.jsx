import React from 'react';
import './information.css';

function Information() {
  return (
    <div>
      <h1>Classic Rock News</h1>
      <div className="info-page">
        <ul className="info-page__list info-list">
          <li className="info-list__item info-item">
            <div className="info-item__img rm" />
            <div className="info-item__main">
              <a href="https://www.loudersound.com/news/rammstein-zeit-single-video-album" className="info-item__link">Watch the epic video for Rammstein’s brand new single Zeit</a>
              <p className="info-item__text">Rammstein release the title track from upcoming new album Zeit – and the video is emotional</p>
            </div>
          </li>
          <li className="info-list__item info-item">
            <div className="info-item__img rs" />
            <div className="info-item__main">
              <a href="https://www.loudersound.com/news/the-rolling-stones-hint-at-uk-and-european-tour" className="info-item__link">The Rolling Stones hint at UK and European tour</a>
              <p className="info-item__text">Rolling Stones have teased the possibility of a UK and European tour</p>
            </div>
          </li>
          <li className="info-list__item info-item">
            <div className="info-item__img pr" />
            <div className="info-item__main">
              <a href="https://www.loudersound.com/news/the-prodigy-announce-return-for-summer-uk-tour-this-ones-for-flinty" className="info-item__link">The Prodigy announce return for summer UK tour: “This one’s for Flinty” </a>
              <p className="info-item__text">The Prodigy share dates for their first tour since the passing of Keith Flint, and hint at new music</p>
            </div>
          </li>
          <li className="info-list__item info-item">
            <div className="info-item__img sp" />
            <div className="info-item__main">
              <a href="https://www.loudersound.com/news/slash-salutes-english-rock-legends-for-creating-the-heaviest-riff-of-all-time" className="info-item__link">Slash salutes English rock legends for creating [the heaviest riff of all time]</a>
              <p className="info-item__text">Slash names the guitar riff he thinks packs the most punch, and its not one of his own</p>
            </div>
          </li>
          <li className="info-list__item info-item">
            <div className="info-item__img" />
            <div className="info-item__main">
              <span className="info-item__link">Some interesting stuff</span>
              <p className="info-item__text">Probably</p>
            </div>
          </li>
          <li className="info-list__item info-item">
            <div className="info-item__img" />
            <div className="info-item__main">
              <span className="info-item__link">Some interesting stuff</span>
              <p className="info-item__text">Probably</p>
            </div>
          </li>
          <li className="info-list__item info-item">
            <div className="info-item__img" />
            <div className="info-item__main">
              <span className="info-item__link">Some interesting stuff</span>
              <p className="info-item__text">Probably</p>
            </div>
          </li>
          <li className="info-list__item info-item">
            <div className="info-item__img" />
            <div className="info-item__main">
              <span className="info-item__link">Some interesting stuff</span>
              <p className="info-item__text">Probably</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Information;
