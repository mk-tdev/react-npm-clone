import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const PackageDetail: React.FC<{ packageName?: string }> = ({ packageName }) => {
  const { getNpmPackageDetail } = useActions();
  const { packageDetail, loading, error } = useTypedSelector(
    (state) => state.packageReducer
  );

  useEffect(() => {
    getNpmPackageDetail("react");
    console.log("called");
  });

  return (
    <div>
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

      {packageDetail && <div>Package Present</div>}
    </div>
  );
};

export default PackageDetail;
