import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


export class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    quantity: PropTypes.number,
  };


  validateImageClass (movieQuantity) {
    const validation = movieQuantity > 1 
      ? 'image'
      : 'greaterImage'
    return validation 
  }

  render() {
    const { poster, title, quantity } = this.props;
    console.log(this.validateImageClass(quantity))

    return (
      //<Link to={`/detail/${id}`} className="card">
      <div className='elementMovie'>
        <div className="card-image imagenCard">
          <figure className={this.validateImageClass(quantity)}>
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
