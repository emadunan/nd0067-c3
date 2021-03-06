import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        {/* <button className="close-search" onClick={this.props.onSearchPageNavigate}>Close</button> */}
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.props.searchText}
            onChange={(event) => this.props.onSearchBooks(event)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
