import React, { useState } from 'react';

const UnitEx = () => {
  const [fontSize, setFontSize] = useState(16);
  return (
    <div className="unit-ex">
      <h4>利用ex实现文字图标不受字号影响垂直居中</h4>
      <div className="unit-ex-container">
        <button onClick={() => setFontSize(fontSize + 1)}>+1</button>
        <button onClick={() => setFontSize(fontSize - 1)}>-1</button>
        <button onClick={() => setFontSize(16)}>reset</button>
      </div>
      <div className="unit-ex-container" style={{ fontSize: `${fontSize}px` }}>
        <div>
          {`当前字号：${fontSize}`}
        </div>
        <div className="unit-ex-mt">
          select year
          <i className="unit-ex-container-icon" />
        </div>
        <div className="unit-ex-mt">
          选择年份
          <i className="unit-ex-container-icon" />
        </div>
      </div>
      <div className="unit-ex-desc"></div>
    </div>
  );
};

export default UnitEx;
