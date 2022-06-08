import React, { Component } from "react";
import * as booksAPI from "./BooksAPI";

class Book extends Component {
    render() {
        const updateBookHandler = (book, targetShilf) => {
            booksAPI.update(book, targetShilf).then(response => console.log(response));
        }
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{ width: 128, height: 193, backgroundImage: 'url(' + this.props.imgUrl + ')' }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={this.props.shelf} onChange={(event) => updateBookHandler(this.props, event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.authors}</div>
                </div>
            </li>
        );
    }
}

export default Book;