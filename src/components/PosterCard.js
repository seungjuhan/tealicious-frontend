import React from 'react';
import PropTypes from 'prop-types';
import './PosterCard.css';

const PosterCard = ({place, poster, host}) => {
    return (
        <div>
          <div>{ place }<div/>
          <img><img/>
          <div>{ host }<div/>
        <div/>
    );
};

PosterCard.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

PosterCard.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default PosterCard;
