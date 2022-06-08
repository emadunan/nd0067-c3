import React, { Component } from "react";
import { Link } from "react-router-dom";
import BooksList from "./BooksList";

class BooksPage extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <BooksList />
        
        <div className="open-search">
          <Link to="/search" id="search-btn-navigator">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BooksPage;