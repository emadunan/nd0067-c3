import React, { Component } from "react";
import Book from "./Book";

class BooksShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shilfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.shelfBooks.map((book, idx) => {
              return (
                <Book
                  key={idx}
                  id={book.id}
                  shelf={book.shelf}
                  title={book.title}
                  authors={book.authors}
                  imgUrl={book.imageLinks.thumbnail}
                  updateMyReadsHandler={this.props.updateMyReadsHandler}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BooksShelf;
