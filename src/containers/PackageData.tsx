import React, { useEffect } from "react";
import "./package-data.css";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

interface Props {
  packageName: string;
  onPackageDetailOut: () => void;
}

const PackageData: React.FC<Props> = ({ packageName, onPackageDetailOut }) => {
  const { fetchPackageData } = useActions();
  const { loading, error, packageData } = useTypedSelector(
    (state) => state.packageDetailReducer
  );

  useEffect(() => {
    console.log("initiated npm test: ", packageName);
    if (packageName) {
      fetchPackageData(packageName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packageName]);

  return (
    <div>
      <button onClick={onPackageDetailOut}>Go Back</button>
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      {!loading && !error && packageData && (
        <div>
          <div className="package-data">
            <div className="package-name">
              {packageData.collected.metadata.name}
            </div>
            <div className="package-description">
              {packageData.collected.metadata.description}
            </div>

            <div className="package-version">
              Version: {packageData.collected.metadata.version}
            </div>
            <div className="divider"></div>
            <div className="package-license">
              License: {packageData.collected.metadata.license}
            </div>

            <div className="package-repository">
              Repository:
              <a
                href={
                  packageData.collected.metadata.repository.url.split("+")[1]
                }
              >
                {packageData.collected.metadata.repository.url.split("+")[1]}
              </a>
            </div>
            <div className="divider"></div>
            <div className="package-stars">
              Npm Stars: {packageData.collected.npm.starsCount}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageData;
