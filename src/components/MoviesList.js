import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array,
  };

  render() {
    const { movies } = this.props;

    return (
      <div className="MoviesList">
        {movies.map((product) => {
          console.log(product);
          return (
            <div key={product.name} className="MoviesList-item">
              <Movie
                id={product.name}
                title={product.name}
                poster={product.imgUrl}
                quantity={movies.length}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
