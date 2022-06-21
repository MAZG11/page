import React, { Component } from 'react';
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';
import FooterComponent from '../components/FooterComponent';

export class Home extends Component {
  state = { usedSearch: false, results: [] };

  _handlResults = (results) => {
    this.setState({ results, usedSearch: true });
  };

  _renderResults() {
    return this.state.results.length === 0 ? (
      <p>Producto no encontrado.</p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  }

  render() {
    return (
        <>
          <div className='prueba'>
            <Title> Buscador </Title>
            <div className="SearchForm-wrapper">
              <SearchForm onResults={this._handlResults} />
            </div>
            {this.state.usedSearch ? (
              this._renderResults()
              ) : (
              <small>Edúcate respecto a lo que comes</small>
            )}
          </div>
        <FooterComponent />
      <div />
      </>
    );
  }
}
