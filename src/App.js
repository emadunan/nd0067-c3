import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import "./App.css";
import SearchPage from "./SearchPage";
import BooksPage from "./BooksPage";

class BooksApp extends React.Component {

  state = {
    myReads: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ myReads: books }));
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
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BooksPage myReads={this.state.myReads} onUpdateMyReads={this.updateMyReadsHandler} />} />
            <Route path="/search" element={<SearchPage onUpdateMyReads={this.updateMyReadsHandler}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
