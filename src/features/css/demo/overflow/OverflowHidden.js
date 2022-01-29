import React, { useState } from 'react';
const OverflowHidden = () => {
  const [current, setCurrent] = useState('1');
  const changeCurrent = e => {
    setCurrent(e.target.innerText);
    // e.preventDefault()
  };
  return (
    <div className="overflow-hidden">
      <div className="overflow-hidden-container">
        <h4>利用overflow: hidden实现tab切换</h4>
        <div className="overflow-hidden-tab">
          <div className="overflow-hidden-tabs grey">
            <input id="one" />1
          </div>
          <div className="overflow-hidden-tabs blue">
            <input id="two" />2
          </div>
          <div className="overflow-hidden-tabs green">
            <input id="three" />3
          </div>
          <div className="overflow-hidden-tabs orange">
            <input id="four" />4
          </div>
        </div>
        <div className="overflow-hidden-key" onClick={changeCurrent}>
          <label
            onClick={changeCurrent}
            className={['overflow-hidden-keys', current === '1' ? 'active' : ''].join(' ')}
            htmlFor="one"
          >
            1
          </label>
          <label
            onClick={changeCurrent}
            className={['overflow-hidden-keys', current === '2' ? 'active' : ''].join(' ')}
            htmlFor="two"
          >
            2
          </label>
          <label
            onClick={changeCurrent}
            className={['overflow-hidden-keys', current === '3' ? 'active' : ''].join(' ')}
            htmlFor="three"
          >
            3
          </label>
          <label
            onClick={changeCurrent}
            className={['overflow-hidden-keys', current === '4' ? 'active' : ''].join(' ')}
            htmlFor="four"
          >
            4
          </label>
        </div>
        <div className="overflow-hidden-desc">
          <p>
            1、元素设置了 overflow:hidden 声明，里面内容高度溢出的时候，滚
            动依然存在，仅仅滚动条不存在!可以通过锚点定位证明
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverflowHidden;
