import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../api/service.js';
import '../../css/searchBar.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
      searchInput: '',
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
	}

  handleSearchInput(event) {
		const { target: { value } } = event;
    this.setState({ searchInput: value});
  }

  handleClick() {
    api.searchVideos();
  }

  render() {
		const { searchInput } = this.state;

    return (
      <div className="searchbar">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={(e) => this.handleSearchInput(e)}
        />
        <div className="search-btn">
          <Link
            className="material-icons search-icon"
            to={`/results/${searchInput}`}
            onClick={this.handleClick}
          >
            search
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchBar;
