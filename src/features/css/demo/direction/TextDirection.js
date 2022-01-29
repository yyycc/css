import React from 'react';
const TextDirection = () => {
  return (
    <div className="text-direction">
      <h4>direction可以改变替换元素或者 inline-block/inline-table 元素的水平呈现顺序</h4>
      <div className="text-direction-container">
        <p className="ellipsis" dir="ltr">
          通常，我们让单行文字溢出用点显示，这个点通常都是在右边的，省略的都是最后的文字，配合
          direction 属性，我们可以让这个点打在开头，让前面的文字省略
        </p>
        <p className="ellipsis" dir="rtl">
          通常，我们让单行文字溢出用点显示，这个点通常都是在右边的，省略的都是最后的文字，配合
          direction 属性，我们可以让这个点打在开头，让前面的文字省略
        </p>
      </div>
      <div className="text-direction-desc"></div>
    </div>
  );
};

export default TextDirection;
