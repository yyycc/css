import React from 'react';
import { Link } from 'react-router-dom';
const MyIndexContainer = ({ title, detail, src, color, tags = [], router, srcType }) => {
  const contentBorder = {
    backgroundColor: color,
  };
  return (
    <div className="my-index-container">
      <div className="my-index-container-content" style={contentBorder}>
        <Link to={router}>
          <h3>{title}</h3>
        </Link>
        <div className="my-index-container-content-tags">
          <span>{'标签: '}</span>
          {tags.map((ele, index) => (
            <span key={ele} className="my-index-container-content-tag">
              {ele}
            </span>
          ))}
        </div>
        <div className="my-index-container-content-detail">
          {detail.map(ele => <p key={ele}>{ele}</p>)}
        </div>
      </div>
      <div className="my-index-container-pic">
        {srcType === 'video' ? (
          <video src={src} type="video/mp4" autoPlay={true} loop={true} />
        ) : (
          <img src={src} />
        )}
      </div>
    </div>
  );
};

export default MyIndexContainer;
