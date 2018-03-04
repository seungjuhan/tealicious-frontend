import React from 'react';
import PropTypes from 'prop-types';
import './PosterCard.css';

const PosterCard = ({place, poster, host}) => {
  return (
    <div>
      <div className="place">{ place }</div>
      <img className="poster" src={ poster }></img>
      <div className="host">{ host }</div>
    </div>
  );
};

PosterCard.propTypes = {
  place: PropTypes.string,
  poster: PropTypes.string,
  host: PropTypes.string,
};

PosterCard.defaultProps = {
  place: 'Unknown',
  poster: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
  host: 'Unknown'
};

export default PosterCard;
