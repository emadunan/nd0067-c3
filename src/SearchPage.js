import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import * as booksAPI from "./BooksAPI";

class SearchPage extends Component {
  state = {
    searchText: "" || window.localStorage.getItem("searchText"),
    filteredBooks: [],
  };

  componentDidMount() {
    if (this.state.searchText) {
      booksAPI.search(this.state.searchText).then((books) => {
        if (Array.isArray(books)) {
          this.setState({ filteredBooks: books });
        } else {
          this.setState({ filteredBooks: [] });
        }
      });
    }
  }

  searchBooks = (event) => {
    window.localStorage.setItem("searchText", event.target.value);
    const localSearchText = window.localStorage.getItem("searchText");
    this.setState({ searchText: localSearchText }, () => {
      if (this.state.searchText) {
        booksAPI.search(this.state.searchText).then((books) => {
          if (Array.isArray(books)) {
            this.setState({ filteredBooks: books });
          } else {
            this.setState({ filteredBooks: [] });
          }
        });
      } else {
        this.setState({ filteredBooks: [] });
      }
    });
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar
          searchText={this.state.searchText}
          onSearchPageNavigate={this.props.onSearchPageNavigate}
          onSearchBooks={this.searchBooks}
        />
        <SearchResult books={this.state.filteredBooks} />
      </div>
    );
  }
}

export default SearchPage;
