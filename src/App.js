import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchPage from "./SearchPage";
import BooksPage from "./BooksPage";

class BooksApp extends React.Component {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false
  // }

  // addBookPageNavigator = () => {
  //   this.setState({ showSearchPage: true })
  // }

  // searchPageNavigator = () => {
  //   this.setState({ showSearchPage: false })
  // }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BooksPage/>} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
