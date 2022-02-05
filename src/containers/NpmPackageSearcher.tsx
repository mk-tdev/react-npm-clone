import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import logoIcon from "../assets/images/npm.svg";
import searchIcon from "../assets/images/search.png";
import closeIcon from "../assets/images/close.png";

const NpmPackageSearcher: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { searchNpmPackages } = useActions();
  const { packages, loading, error } = useTypedSelector(
    (state) => state.packagesReducer
  );

  const onsubmit = (): void => {
    searchNpmPackages(searchTerm);
  };

  const onClear = (): void => {
    setSearchTerm("");
  };

  return (
    <div className="npm-package-searcher">
      <div className="search-container">
        <div>
          <img src={logoIcon} alt="npm" />
        </div>
        <div>
          <img src={searchIcon} alt="search" />

          <input
            value={searchTerm}
            type="text"
            placeholder="Search packages"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm.length > 0 && (
            <img
              src={closeIcon}
              alt="close"
              className="close-icon"
              onClick={onClear}
            />
          )}

          <button onClick={onsubmit}>Search</button>
        </div>
      </div>

      {error && <h3>{error}</h3>}
      {loading && <h3>{"Loading..."}</h3>}

      <div className="result-container">
        {!loading &&
          packages &&
          packages.map((pack) => <div key={pack}>{pack}</div>)}
      </div>
    </div>
  );
};

export default NpmPackageSearcher;
