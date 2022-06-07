import React, { Component } from "react";
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
          <button onClick={this.props.onAddBookPageNavigate}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default BooksPage;