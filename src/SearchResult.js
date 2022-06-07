import React, { Component } from "react";
import Book  from "./Book";

class SearchResult extends Component {
    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.books && this.props.books.map((el, idx) => <Book key={idx} title={el.title} authors={el.authors} imgUrl={el.imageLinks.thumbnail}/>)}
                </ol>
            </div>
        )
    }
}

export default SearchResult;