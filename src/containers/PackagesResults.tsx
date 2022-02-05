import React from "react";
import "./packages-results.css";

import PackageCard from "../components/Package-Card";

interface PackageResultsProps {
  searchTerm: string;
  packages: any;
  totalFound: number;
}

const PackagesResults: React.FC<PackageResultsProps> = ({
  totalFound,
  searchTerm,
  packages,
}) => {
  return (
    <div className="packages-container">
      <div className="results-summary">
        <span>{totalFound} packages found</span>
        <span>Scroll down for more</span>
      </div>
      <div className="results">
        <div>
          <p>Sort packages</p>
          <div className="sorters">
            <div>Optimal</div>
            <div>Popularity</div>
            <div>Quality</div>
            <div>Maintenance</div>
          </div>
        </div>

        <div className="results-list">
          {packages.map((packageDetail: any) => (
            <PackageCard
              key={packageDetail.package.name}
              searchTerm={searchTerm}
              packageDetail={packageDetail.package}
              score={packageDetail.score}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesResults;