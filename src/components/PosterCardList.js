import React from 'react';
import PosterCard from './PosterCard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './PosterCardList.css';

import { fetchProducts } from '../actions';

class PosterCardList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! { error.message }</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="PosterCardList">
        {products.map(postercard => <PosterCard
          place={postercard.place}
          time={postercard.time}
          host={postercard.hosts[0].single_host}
          poster={postercard.image[0].single_poster}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.postercard,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(PosterCardList);
