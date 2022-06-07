import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class SearchPage extends Component {
    render() {
        return (
            <div className="search-books">
                <SearchBar onSearchPageNavigate={this.props.onSearchPageNavigate}/>
                <SearchResult />
            </div>
        )
    }
}

export default SearchPage;