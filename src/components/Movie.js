import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
  };

  render() {
    const { poster, title, year, calories, carbohydrates, proteins } =
      this.props;

    return (
      //<Link to={`/detail/${id}`} className="card">
      <div>
        <div className="card-image">
          <figure className="image">
            <img alt={title} src={poster} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
        </div>
      </div>
      //</Link> 
    );
  }
}
