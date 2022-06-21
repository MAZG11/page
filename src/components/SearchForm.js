import React, { Component } from 'react';
import data from '../data/data.json';
//const API_KEY = 'cfc5e8cb';

export class SearchForm extends Component {
  state = {
    inputMovie: '',
  };

  handleChange = (e) => {
    this.setState({ inputMovie: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputMovie } = this.state;
    // fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
    //   .then((res) => res.json())
    //   .then((results) => {
    //     const { Search = [], totalResults = '0' } = results;
    //     console.log({ Search, totalResults });
    //     this.props.onResults(Search);
    //   });

    console.log(inputMovie);

    let results = data.filter((product) => {
      return product.name.toLowerCase().includes(inputMovie.toLowerCase());
    });

    this.props.onResults(results);

  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this.handleChange}
              type="text"
              placeholder="Nombre del producto"
            />
          </div>
          <div className="control">
            <button className="button is-info">Buscar</button>
          </div>
        </div>
      </form>
    );
  }
}
