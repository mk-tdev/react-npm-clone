import React from "react";
import "./App.css";
import Header from "./components/Header";
import NpmPackageSearcher from "./containers/NpmPackageSearcher";

function App() {
  return (
    <div className="app">
      <Header />

      <NpmPackageSearcher />
    </div>
  );
}

export default App;
