import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import * as booksAPI from "./BooksAPI";

class SearchPage extends Component {
  state = {
    searchText: "" || window.localStorage.getItem("searchText"),
    filteredBooks: []
  };

  updateSearchHandler = (book, targetShelf) => {
    const updatedBook = {
      id: book.id,
      shelf: targetShelf,
      title: book.title,
      authors: book.authors,
      imageLinks: { thumbnail: book.imgUrl },
    };
    this.setState((prevStat) => {
      const shelfBooks = prevStat.filteredBooks.filter(
        (b) => b.id !== updatedBook.id
      );
      return {
        filteredBooks: [...shelfBooks, updatedBook],
      };
    });
  };

  componentDidMount() {
    if (this.state.searchText) {
      booksAPI.search(this.state.searchText).then((books) => {
        if (Array.isArray(books)) {
          let updatedBooks = []
          books.forEach(el => {
            booksAPI.get(el.id).then(resBook => {
              if (resBook.shelf === "currentlyReading") {
                el.shelf = "currentlyReading";
                updatedBooks.push(el);
              } else if (resBook.shelf === "wantToRead") {
                el.shelf = "wantToRead";
                updatedBooks.push(el);
              } else if (resBook.shelf === "read") {
                el.shelf = "read";
                updatedBooks.push(el);
              } else {
                el.shelf = "none";
                updatedBooks.push(el);
              }
              return updatedBooks;
            }).then(resData => {
              this.setState({ filteredBooks: resData });
            })
          });
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
            let updatedBooks = []
            books.forEach(el => {
              booksAPI.get(el.id).then(resBook => {
                if (resBook.shelf === "currentlyReading") {
                  el.shelf = "currentlyReading";
                  updatedBooks.push(el);
                } else if (resBook.shelf === "wantToRead") {
                  el.shelf = "wantToRead";
                  updatedBooks.push(el);
                } else if (resBook.shelf === "read") {
                  el.shelf = "read";
                  updatedBooks.push(el);
                } else {
                  el.shelf = "none";
                  updatedBooks.push(el);
                }
                return updatedBooks;
              }).then(resData => {
                this.setState({ filteredBooks: resData });
              })
            });
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
        <SearchResult books={this.state.filteredBooks} onUpdateMyReads={this.props.onUpdateMyReads} onUpdateSearch={this.updateSearchHandler}/>
      </div>
    );
  }
}

export default SearchPage;
