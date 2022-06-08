import React, { Component } from "react";
import * as booksAPI from "./BooksAPI";
import BooksShilf from "./BooksShilf";

class BooksList extends Component {
    state = {
        myReads: []
    }

    componentDidMount() {
        booksAPI.getAll().then(books => this.setState({ myReads: books }));
    }

    render() {
        return (
            <div className="list-books-content">
                <div>
                    <BooksShilf shilfTitle="Currently Reading"
                        shilfBooks={this.state.myReads.filter(b => b.shelf === "currentlyReading")} />
                    <BooksShilf shilfTitle="Want to Read"
                        shilfBooks={this.state.myReads.filter(b => b.shelf === "wantToRead")}/>
                    <BooksShilf shilfTitle="Read"
                        shilfBooks={this.state.myReads.filter(b => b.shelf === "read")}/>
                </div>
                {this.currentlyReading}
            </div>
        );
    }
}

export default BooksList;