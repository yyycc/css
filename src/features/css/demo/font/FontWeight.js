import React from 'react';

const FontWeight = () => {
  const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <div className="font-weight">
      <div className="font-weight-container">
        {fontWeights.map(ele => (
          <p className="font-weight-normal" style={{ fontWeight: ele }}>{`字重${ele}`}</p>
        ))}
        <p>可以发现有好几档是没有效果的，说明这个字体没有这种粗细</p>
      </div>
      <div className="font-weight-container" style={{ fontFamily: 'my' }}>
        {fontWeights.map(ele => (
          <p className="font-weight-defined" style={{ fontWeight: ele }}>{`字重${ele}`}</p>
        ))}
        <p>使用@font-face来重新定义一下各个font-weight下显示的字体，不同字重会显示不同的字体</p>
      </div>
    </div>
  );
};

export default FontWeight;
