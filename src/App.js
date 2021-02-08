import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Provider as MovieProvider } from "./context/MovieContext";
import { Provider as SearchProvider } from "./context/SearchContext";

import Header from "./components/Header";
import Characters from "./components/Characters";
import List from "./components/List";

function App() {
  return (
    <div className="flex flex-col p-4 bg-gray-50  ">
      <MovieProvider>
        <SearchProvider>
          <BrowserRouter>
            <Header />
            <main className="main flex">
              <Route path="/" component={List} />
              <Route path="/characters/:id" exact component={Characters} />
            </main>
          </BrowserRouter>
        </SearchProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
