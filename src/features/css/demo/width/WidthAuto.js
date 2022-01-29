import React from 'react';
const WidthAuto = () => {
  return (
    <div className="width-auto">
      <div className="width-auto-fill-available border-bottom">
        <h4>fill-available - 充分利用空间</h4>
        <div className="fill-available bg-purple">div元素</div>
        <p className="fill-available-p bg-green">div、p这些元素的宽度都是默认100%父级容器的</p>
      </div>
      <div className="width-auto-shrink-to-fit border-bottom">
        <h4>shrink-to-fit - 包裹性</h4>
        <div className="shrink-to-fit bg-purple">position: absolute</div>
        <p className="shrink-to-fit-p bg-green">
          浮动、绝对定位、inline-block 元素或 table
          这些元素的宽度都会收缩到合适，也就是正好包住内部所有内容
        </p>
      </div>
      <div className="width-auto-min-content border-bottom">
        <h4>min-content - 收缩到最小</h4>
        <div className="flex">
          <table>
            <tbody>
            <tr>
              <td>就1列就1列</td>
              <td>当父级relative, and the width is relatively small...</td>
              <td>当父级relative, and the width is relatively small...</td>
            </tr>
            </tbody>
          </table>
          <div className="width-zero">
            <span>很多中文</span>
          </div>
          <div className="width-zero">
            <span>display:inline-block;</span>
          </div>
        </div>
      </div>
      <div className="width-auto-over">
        <h4>max-content - 超出容器限制</h4>
        <div className="nowrap">
          <span className="bg-purple">
            除非有明确的 width 相关设置，否则上面 3 种情况尺寸都不会主动
            超过父级容器宽度的，但是存在一些特殊情况。例如，内容很长的连续的英文和数字，或者内联
            元素被设置了 white-space:nowrap
          </span>
        </div>
        <div className="over bg-green">
          <span className="bg-green">
            本div没有设置white-space:nowrap，是内容很长的连续的英文和数字qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890
          </span>
        </div>
      </div>
    </div>
  );
};

export default WidthAuto;
