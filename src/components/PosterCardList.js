import React from 'react';
import PosterCard from './PosterCard';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import './PosterCardList.css';

const PosterCardList = ({postercard}) => {
  const posterCardList = postercard.map(
    (postercard, i) => (
      <PosterCard
        key={i}
        index={i}
        {...postercard.toJS()}
      />
    )
  );

  return (
    <div className="PosterCardList">
      {posterCardList}
    </div>
  );
};

PosterCardList.propTypes = {
  postercard: PropTypes.instanceOf(List),
};

PosterCardList.defaultProps = {
  postercard: [],
}

export default PosterCardList;
