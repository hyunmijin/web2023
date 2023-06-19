import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header attr={"site__nav show"}/>
      <Routes>
        <Route attr={"site__nav show"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
