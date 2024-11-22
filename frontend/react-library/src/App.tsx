import React from "react";
import "./App.css";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";

function App() {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      <SearchBooksPage />
      <Footer />
    </>
  );
}

export default App;
