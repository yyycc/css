import React, { useState } from 'react';
const Absolute = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="absolute">
      <div className="absolute-position">
        <h4>定位的位置 和没有设置 position:absolute 时候的位置相关</h4>
        <div className="absolute-position-container">
          <h5 className="absolute-position">
            元素：
            <div>div</div>
          </h5>
          <h5 className="absolute-position-div">
            元素：
            <span>span</span>
          </h5>
        </div>

        <div className="absolute-position-container">
          <p>子元素增加position: absolute后</p>
          <h5 className="absolute-position">
            元素：
            <div className="absolute">div</div>
          </h5>
          <h5 className="absolute-position-div">
            元素：
            <span className="absolute">span</span>
          </h5>
        </div>
      </div>
      <div className="showDialog" onClick={() => setShow(true)}>
        展示居中块
      </div>
      <div className="showDialog" onClick={() => setShow(false)}>
        隐藏居中块
      </div>
      <div className="absolute-position-dialog" style={{ display: show ? 'block' : 'none' }}>
        <p>position: absolute;</p>
        <p>left: 0;</p>
        <p>bottom: 0;</p>
        <p>right: 0;</p>
        <p>top: 0;</p>
        <p>width: 300px;</p>
        <p>height: 200px;</p>
        <p>background-color: #b9f2d8;</p>
        <p>margin: auto;</p>
      </div>
    </div>
  );
};

export default Absolute;
