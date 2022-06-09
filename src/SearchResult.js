import React, { Component } from "react";
import Book from "./Book";

class SearchResult extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.books &&
            this.props.books.map((b, idx) => {
              const imageUrl = b.imageLinks ? b.imageLinks.thumbnail : "";
              return (
                <Book
                  key={idx}
                  id={b.id}
                  shelf={b.shelf}
                  title={b.title}
                  authors={b.authors}
                  imgUrl={imageUrl}
                  onUpdateMyReads={this.props.onUpdateMyReads}
                />
              );
            })}
        </ol>
      </div>
    );
  }
}

export default SearchResult;
