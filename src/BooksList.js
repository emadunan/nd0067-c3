import React, { Component } from "react";
import BooksShelf from "./BooksShelf";

class BooksList extends Component {
  

  render() {
    return (
      <div className="list-books-content">
        <div>
          <BooksShelf
            shelfTitle="Currently Reading"
            shelfBooks={this.props.myReads.filter(
              (b) => b.shelf === "currentlyReading"
            )}
            onUpdateMyReads={this.props.onUpdateMyReads}
          />
          <BooksShelf
            shelfTitle="Want to Read"
            shelfBooks={this.props.myReads.filter(
              (b) => b.shelf === "wantToRead"
            )}
            onUpdateMyReads={this.props.onUpdateMyReads}
          />
          <BooksShelf
            shelfTitle="Read"
            shelfBooks={this.props.myReads.filter((b) => b.shelf === "read")}
            onUpdateMyReads={this.props.onUpdateMyReads}
          />
        </div>
        {this.currentlyReading}
      </div>
    );
  }
}

export default BooksList;
