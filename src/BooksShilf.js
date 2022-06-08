import React, { Component } from "react";
import Book from "./Book";

class BooksShilf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shilfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.shilfBooks.map((b, idx) => <Book key={idx} title={b.title} authors={b.authors} imgUrl={b.imageLinks.thumbnail} />)}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BooksShilf;