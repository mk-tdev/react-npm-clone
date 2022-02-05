import React, { useState, useEffect } from "react";
import "./package-card.css";
import AvatarIcon from "../assets/images/avatar.png";

// const packageDetail = {
//   name: "react",
//   version: "16.13.1",
//   keywords: ["react", "component", "library"],
//   description:
//     "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
//   publisher: {
//     username: "facebook",
//   },
// };

// const score = {
//   detail: {
//     maintenance: 33,
//     popularity: 91,
//     quality: 52,
//   },
// };

interface PackageCardProps {
  searchTerm: string;
  packageDetail: any;
  score: any;
}

const PackageCard: React.FC<PackageCardProps> = ({
  searchTerm,
  packageDetail,
  score,
}) => {
  // console.log({ packageDetail });
  // console.log({ score });
  const [scoreData, setScoreData] = useState(score?.detail);

  const calculateScore = (score: any) => {
    const { maintenance, popularity, quality } = score.detail;

    return {
      popularity: +(popularity * 100).toFixed(0),
      quality: +(quality * 100).toFixed(0),
      maintenance: +(maintenance * 100).toFixed(0),
    };
  };

  useEffect(() => {
    if (score) {
      setScoreData(calculateScore(score));
    }
  }, [score]);

  return (
    <div className="package-card">
      <div className="left">
        <div className="title">
          {packageDetail.name}{" "}
          {searchTerm === packageDetail.name && (
            <span className="exact-match">exact match</span>
          )}
        </div>
        <div className="description">{packageDetail.description}</div>
        {packageDetail.keywords && (
          <div className="key-words">
            {packageDetail.keywords.map((keyword: string, index: number) => (
              <div className="pill" key={keyword + index}>
                {keyword}
              </div>
            ))}
          </div>
        )}

        <div className="published">
          <img src={AvatarIcon} alt="Avatar Icon" />
          <div>{packageDetail.publisher.username}</div>
          <div>published {packageDetail.version}</div>
        </div>
      </div>
      <div>
        {scoreData && (
          <div>
            <div className="measure">
              <div>p</div>
              <div className="measure-bar">
                <div
                  className="p"
                  style={{ width: scoreData.popularity + "%" }}
                ></div>
              </div>
            </div>
            <div className="measure">
              <div>q</div>
              <div className="measure-bar">
                <div
                  className="q"
                  style={{ width: scoreData.quality + "%" }}
                ></div>
              </div>
            </div>
            <div className="measure">
              <div>m</div>
              <div className="measure-bar">
                <div
                  className="m"
                  style={{ width: scoreData.maintenance + "%" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
