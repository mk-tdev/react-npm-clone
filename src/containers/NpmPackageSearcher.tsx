import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import logoIcon from "../assets/images/npm.svg";
import searchIcon from "../assets/images/search.png";
import closeIcon from "../assets/images/close.png";
import PackagesResults from "./PackagesResults";
import PackageDetail from "./PackageDetail";

const NpmPackageSearcher: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [selectedPackageName, setSelectedPackageName] =
    React.useState<string>("");
  const [searchFocused, setSearchFocused] = React.useState<boolean>(false);
  const [showPackageDetail, setShowPackageDetail] =
    React.useState<boolean>(false);

  useEffect(() => {
    console.log("initiated");
  });

  const { searchNpmPackages } = useActions();
  const { packages, loading, error } = useTypedSelector((state) => {
    console.log({ state });
    return state.packagesReducer;
  });

  const onsubmit = (): void => {
    searchNpmPackages(searchTerm);
  };

  const onPackageDetailClick = (selectedPackageName: string): void => {
    setShowPackageDetail(true);
    setSelectedPackageName(selectedPackageName);
  };

  const onPackageDetailOut = (): void => {
    setShowPackageDetail(false);
  };

  const onClear = (): void => {
    setSearchTerm("");
  };

  const onSearchFocus = (): void => setSearchFocused(true);
  const onSearchBlur = (): void => setSearchFocused(false);

  return (
    <div className="npm-package-searcher">
      <div className="search-container">
        <div>
          <img src={logoIcon} alt="npm" />
        </div>
        <div className={searchFocused ? "active-search" : "inactive-search"}>
          <img src={searchIcon} alt="search" />

          <input
            onFocus={onSearchFocus}
            onBlur={onSearchBlur}
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

      {error && (
        <div>
          <h3>{error}</h3>
        </div>
      )}
      {loading && (
        <div>
          <h3>{"Loading..."}</h3>
        </div>
      )}

      {!loading &&
        !error &&
        packages &&
        packages.results &&
        !showPackageDetail && (
          <PackagesResults
            searchTerm={searchTerm}
            packages={packages.results}
            totalFound={packages.total}
            onPackageDetailClick={onPackageDetailClick}
          />
        )}

      {!loading && !error && selectedPackageName && showPackageDetail && (
        <PackageDetail packageName={selectedPackageName} />
      )}
    </div>
  );
};

export default NpmPackageSearcher;
