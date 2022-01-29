import React, { useState } from 'react';
const MaxHeight = () => {
  const [expand, setExpand] = useState(false);
  const [expandMax, setExpandMax] = useState(false);
  return (
    <div className="max-height">
      <div className="max-height-height">
        <p>
          就行为表现来看，“内联元素”的典型特征就是可以和文字在一行显示。因此，文字是内
          联元素，图片是内联元素，按钮是内联元素，输入框、下拉框等原生表单控件也是内联元素。
        </p>
        <div className={['element', expand ? 'expand' : ''].join(' ')}>
          <p>
            下面有一个疑问:浮动元素貌似也是可以和文字在一个水平上显示的，是不是浮动元素也
            是内联级别的呢?不是的。实际上，浮动元素和后面的文字并不在一行显示，浮动元素已经在
            文档流之外了。证据就是，当后面文字足够多的时候，文字并不是在浮动元素的下面，而是继
            续在后面。这就说明，浮动元素和后面文字不在一行，只是它们恰好站在了一起而已。真相是，
            浮动元素会生成“块盒子”，这就是后话了。
          </p>
        </div>
        {!expand && (
          <p onClick={() => setExpand(true)} className="pointer blue-color">
            更多↓
          </p>
        )}
        {expand && (
          <p onClick={() => setExpand(false)} className="pointer blue-color">
            收起↑
          </p>
        )}
      </div>
      <div className="max-height-max">
        <p>
          inline 和 block是流体布局的本质所在。从作用上来讲，块级负责结构，内联负 责内容。CSS
          世界是为图文展示而设计的。所谓图文，指图片和文字，是最典型的内联元素。
        </p>
        <div className={['element', expandMax ? 'expand' : ''].join(' ')}>
          <p>
            首先要明白这一点:“内联元素”的“内联”特指“外在盒子”，和“display 为 inline
            的元素”不是一个概念!inline-block 和 inline-table 都是“内联元素”，因为它们的
            “外在盒子”都是内联盒子。自然 display:inline 的元素也是“内联元素”，那么，&lt;button&gt;
            按钮元素是内联元素，因为其 display 默认值是 inline-block;&lt;img&gt;图片元素也是内联
            元素，因为其 display 默认值是 inline 等。
          </p>
        </div>
        {!expandMax && (
          <p onClick={() => setExpandMax(true)} className="pointer blue-color">
            更多↓
          </p>
        )}
        {expandMax && (
          <p onClick={() => setExpandMax(false)} className="pointer blue-color">
            收起↑
          </p>
        )}
      </div>
    </div>
  );
};

export default MaxHeight;
