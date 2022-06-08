import React, { Component } from "react";
import * as booksAPI from "./BooksAPI";
import BooksShilf from "./BooksShilf";

class BooksList extends Component {
  state = {
    myReads: [],
  };

  componentDidMount() {
    booksAPI.getAll().then((books) => this.setState({ myReads: books }));
  }

  updateMyReadsHandler = (book, targetShelf) => {
    const updatedBook = {
      id: book.id,
      shelf: targetShelf,
      title: book.title,
      authors: book.authors,
      imageLinks: { thumbnail: book.imgUrl },
    };
    this.setState((prevStat) => {
      const shelfBooks = prevStat.myReads.filter(
        (b) => b.id !== updatedBook.id
      );
      return {
        myReads: [...shelfBooks, updatedBook],
      };
    });
  };

  render() {
    return (
      <div className="list-books-content">
        <div>
          <BooksShilf
            shilfTitle="Currently Reading"
            shilfBooks={this.state.myReads.filter(
              (b) => b.shelf === "currentlyReading"
            )}
            updateMyReadsHandler={this.updateMyReadsHandler}
          />
          <BooksShilf
            shilfTitle="Want to Read"
            shilfBooks={this.state.myReads.filter(
              (b) => b.shelf === "wantToRead"
            )}
            updateMyReadsHandler={this.updateMyReadsHandler}
          />
          <BooksShilf
            shilfTitle="Read"
            shilfBooks={this.state.myReads.filter((b) => b.shelf === "read")}
            updateMyReadsHandler={this.updateMyReadsHandler}
          />
        </div>
        {this.currentlyReading}
      </div>
    );
  }
}

export default BooksList;
