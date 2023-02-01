import React from 'react';
const HeightPercent = () => {
  return (
    <div className="height-percent">
      <div className="height-percent-normal">
        <div className="father">
          <div className="father-desc ">father: padding 30px</div>
          <div className="child">child: 高度100px</div>
        </div>
      </div>
      <div className="height-percent-absolute">
        <div className="father">
          <div className="father-desc ">father: padding 30px</div>
          <div className="child">child: 高度160px</div>
        </div>
      </div>
      <div className="height-percent-desc">
        <p>1、对于普通文档流中的元素，百分比高度值要想起作用， 其父级必须有一个可以生效的高度值</p>
        <p>
          2、对定位的宽高百分比计算是相对于 padding box 的，也就是说会把 padding 大小值计算
          在内；非定位元素则是相对于 content box 计算的,宽高百分比计算不会将 padding 计算在内
        </p>
      </div>
      <div class={"cyy-test"}></div>
    </div>
  );
};

export default HeightPercent;
