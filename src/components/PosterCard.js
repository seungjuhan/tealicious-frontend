import React from 'react';
import PropTypes from 'prop-types';
import './PosterCard.css';

const PosterCard = ({time, place, poster, host}) => {
  return (
    <div>
      <div className="time">{ time }</div>
      <div className="place">{ place }</div>
      <div className="posterContainer">
        <img className="poster" src={ poster }></img>
      </div>
      <div className="host">{ host }</div>
    </div>
  );
};

PosterCard.propTypes = {
  time: PropTypes.string,
  place: PropTypes.string,
  poster: PropTypes.string,
  host: PropTypes.string,
};

PosterCard.defaultProps = {
  time: 'Unknown',
  place: 'Unknown',
  poster: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
  host: 'Unknown'
};

export default PosterCard;
