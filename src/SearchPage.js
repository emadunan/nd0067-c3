import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import * as booksAPI from "./BooksAPI";

class SearchPage extends Component {

    state = {
        searchText: "",
        filteredBooks: []
    }

    componentDidMount() {
        // if(this.state.searchText) 
        // booksAPI.getAll().then(books => this.setState({ filteredBooks: books }));
    }

    searchBooks = (event) => {
        this.setState({ searchText: event.target.value }, () => {
            if (this.state.searchText) {
                booksAPI.search(this.state.searchText).then(books => {
                    if (Array.isArray(books)) {
                        this.setState({ filteredBooks: books })
                    } else { this.setState({ filteredBooks: [] }) }
                });
            }
        })
    }

    render() {
        return (
            <div className="search-books">
                <div>{this.state.searchText}</div>
                <SearchBar onSearchPageNavigate={this.props.onSearchPageNavigate} onSearchBooks={this.searchBooks} />
                <SearchResult books={this.state.filteredBooks} />
            </div>
        )
    }
}

export default SearchPage;