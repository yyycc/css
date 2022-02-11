import React, { useState } from 'react';

const Layers = () => {
  const [zIndex, setZIndex] = useState('auto');
  function changeZIndex(val) {
    setZIndex(val);
  }
  return (
    <div className="layers">
      <div className="layers-content">
        <div className="layers-container">
          <div className="layers-container-box-first" style={{ zIndex }}>
            <div className="layers-container-box-first-child">z-index: 2</div>
          </div>
          <div className="layers-container-box-second" style={{ zIndex }}>
            <div className=" layers-container-box-second-child">z-index: 1</div>
          </div>
        </div>
        <div className=" layers-container-change">
          <button onClick={() => changeZIndex('0')}>设置父元素z-index: 0</button>
          <button onClick={() => changeZIndex('auto')}>重置</button>
        </div>
        <div className=" layers-container-desc">
          <p>当父元素都是z-index: auto时，子元素z-index: 2在z-index: 1上面</p>
          <p>当父元素都是z-index: auto时，子元素z-index相同时，后面的元素在前面的元素上面</p>
          <p>当父元素都是z-index: 0(具体数值)时，谁在后谁在上</p>
        </div>
      </div>

      <div className="layers-content">
        <div className="layers-content-page">
          <h4 className="layers-content-page-title">层叠上下文</h4>
          <p>层叠上下文元素有如下特性:</p>
          <p>层叠上下文的层叠水平要比普通元素高。</p>
          <p>层叠上下文可以阻断元素的混合模式。</p>
          <p>层叠上下文可以嵌套，内部层叠上下文及其所有子元素均受制于外部的“层叠上下文”。</p>
          <p>
            每个层叠上下文和兄弟元素独立，也就是说，当进行层叠变化或渲染的时候，只需要考虑后代元素。
          </p>
          <p>
            每个层叠上下文是自成体系的，当元素发生层叠的时候，整个元素被认为是在父层叠上下文的层叠顺序中。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layers;
