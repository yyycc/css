import React, { useState } from 'react';
import MyInput from '../../../common/MyInput/MyInput';
const FillAvailable = () => {
  const [value, setValue] = useState('');
  const changeInput = e => {
    setValue(e.target.value);
  };
  return (
    <div className="fill-available">
      <h4 className="text-center">文字少的时候居中显示，文字超过一行的时候居左显示</h4>
      <div className="fill-available-container">
        <MyInput placeHolder="请输入更多内容" value={value} onChange={changeInput} />
        <div className="fill-available-div">
          <p className="fill-available-span">{value}</p>
        </div>
        <button>{value}</button>
      </div>
      <div className="fill-available-desc text-center">
        <p>
          1、当文字只有一行时，span表现包裹性，宽度始终和字符长度一致，p的text-align:
          left不生效，外部div的text-align: center生效，文字居中
        </p>
        <p>
          2、当文字超过一行，span的宽度为一行宽度，而最后一行宽度大于该行文字宽度，p的text-align:
          left生效，文字居左
        </p>
        <p>
          3、我们著名的按钮元素，就是CSS 世界中极具代表性的 inline-block 元素，可谓展示“包裹性”最好的例 子，
          具体表现为:按钮文字越多宽度越宽(内部尺寸特性)，但如果文字足够多，则会在容器的 宽度处自动换行(自适应特性)。
        </p>
      </div>
    </div>
  );
};

export default FillAvailable;
