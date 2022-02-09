import React from 'react';

const LoadingDot = () => {
  return (
    <div className="loading-dot">
      <h4>实现...横向动画效果</h4>
      <div className="loading-dot-container">
        <div className="loading-dot-container-dots">
          正在加载中
          <div className="loading-dot-container-dot">...</div>
        </div>
      </div>

      <div className="loading-dot-desc"></div>
    </div>
  );
};

export default LoadingDot;
