import React from 'react';

const Border = () => {
  return (
    <div className="border">
      <div className="border-container">
        <h4>border-color 默认颜色就是 color 色值</h4>
        <div className="border-container-box"/>
      </div>
      <div className="border-container">
        <h4>利用border来实现三角形</h4>
        <div className="border-container-triangle"/>
        <div className="border-container-tooltip">利用伪元素+border来实现这个小三角</div>
      </div>
      <div className="border-desc"></div>
    </div>
  );
};

export default Border;
