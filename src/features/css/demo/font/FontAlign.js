import React from 'react';

const FontAlign = () => {
  return (
    <div className="font-align">
      <div className="font-align-container">
        <h4>单文字垂直居中</h4>
        <div className="font-align-container-box">line-height 可以让单行或多行元素近似垂直居中</div>
      </div>
      <div className="font-align-container">
        <h4>多行文字垂直居中</h4>
        <div className="font-align-container-box">
          <div className="font-align-container-content">
            多行文本或者替换元素的垂直居中实现原理和单行文本就不一样了，需要 line-height
            属性的好朋友 vertical-align 属性帮助才可以
          </div>
        </div>
      </div>
      <div className="font-align-desc">
        <p>多行文字使用一个标签包裹，然后设置 display 为 inline-block。</p>
        <p>
          重置外部的 line-height 为正常的大小，又能保持内联元素特性，从而可以设置vertical-align
          属性，以及产生一个非常关键的“行框盒子”。我们需要它附带的一个产物— “幽灵空白节点”，
        </p>
        <p>
          即一个宽度为 0、表现如同普通字符的看不见的“节点”。有了这个“幽灵空白节点”，我们的 line-
          height就有了作用的对象,从而相当于在.content 元素前面撑起了一个高度为 120px 的宽度为
          0 的内联元素。
        </p>
        <p>
          内联元素默认都是基线对齐的，所以我们通过对元素设置 vertical-align:middle
          来调整多行文本的垂直位置，从而实现“垂直居中”效果。
        </p>
      </div>
    </div>
  );
};

export default FontAlign;
