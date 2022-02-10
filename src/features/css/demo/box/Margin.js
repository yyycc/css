import React, { useState } from 'react';
import kitty from '../../../../images/kitty.jpeg';

const Margin = () => {
  const [marginRight, setMarginRight] = useState(0);
  const [marginTop, setMarginTop] = useState(0);
  const [margin, setMargin] = useState(20);
  const [fatherStyle, setFatherStyle] = useState({});
  return (
    <div className="margin">
      <h3>margin</h3>
      <div className="margin-container">
        <div className="margin-container-content">
          {/*margin改变元素尺寸*/}
          <div className="margin-container-content-block">
            <h4>margin改变元素尺寸</h4>
            <div className="margin-container-father">
              <div className="margin-container-son" style={{ marginRight }}>
                <br />
                <span>{`margin-right: ${marginRight}`}</span>
              </div>
            </div>
            <div className="margin-container-change">
              <span>margin改变元素尺寸：</span>
              <button
                className="margin-container-button"
                onClick={() => {
                  setMarginRight(marginRight - 2);
                }}
              >
                减少子元素margin-right
              </button>
              <button
                className="margin-container-button"
                onClick={() => {
                  setMarginRight(0);
                }}
              >
                重置
              </button>
            </div>
            <div className="margin-desc">给子元素设置负的margin可以增加子元素的宽度</div>
          </div>
          {/*父子/相邻margin合并*/}
          <div className="margin-container-content-block">
            <h4>margin合并</h4>
            <div className="margin-container-father" style={fatherStyle}>
              <div className="margin-container-son" style={{ marginTop }}>
                <br />
                <span>{`margin-top: ${marginTop}`}</span>
              </div>
            </div>
            <div className="margin-container-change">
              <span>margin改变元素间距：</span>
              <button
                className="margin-container-button"
                onClick={() => {
                  setMarginTop(marginTop + 2);
                }}
              >
                增加子元素margin-top
              </button>
              <button
                className="margin-container-button"
                onClick={() => {
                  setMarginTop(0);
                }}
              >
                重置
              </button>
            </div>
            <div className="margin-container-change">
              <span>解决父子margin合并</span>
              <button
                className="margin-container-button"
                onClick={() => {
                  setFatherStyle({ overflow: 'hidden' });
                }}
              >
                父元素BFC
              </button>
              <button
                className="margin-container-button"
                onClick={() => {
                  setFatherStyle({ borderTop: '1px solid' });
                }}
              >
                父元素增加border-top
              </button>
              <button
                className="margin-container-button"
                onClick={() => {
                  setFatherStyle({ paddingTop: '1px' });
                }}
              >
                父元素增加padding-top
              </button>
              <button
                className="margin-container-button"
                onClick={() => {
                  setFatherStyle({});
                }}
              >
                重置
              </button>
            </div>
            <div className="margin-desc">
              给子元素设置margin-top时，一开始是没有任何变化的，直到22px时才有变化，但不是子元素离父元素顶部距离增加，而是父元素离上面的margin距离增加
            </div>
          </div>
          {/*空元素margin合并*/}
          <div className="margin-container-content-block">
            <h4>margin合并</h4>
            <div className="margin-container-father margin-container-father-white">
              <p>{`height: ${margin}`}</p>
              <div className="margin-container-null-father">
                <div className="margin-container-null" style={{ margin: `${margin}px 0` }} />
              </div>
            </div>
            <div className="margin-container-change">
              <span>{`当前margin：${margin}px 0`}</span>
              <button
                className="margin-container-button"
                onClick={() => {
                  setMargin(margin + 2);
                }}
              >
                增加子元素上下margin
              </button>
              <button
                className="margin-container-button"
                onClick={() => {
                  setMargin(10);
                }}
              >
                重置
              </button>
            </div>
            <div className="margin-desc">
              子元素margin-top和margin-bottom都设置为n时，父元素的高度是n而不是2n，因为空元素上下margin合并了
            </div>
          </div>
        </div>
      </div>
      <div className="margin-container">
        <h4>使用子元素margin-bottom实现底部留白</h4>
        <div className="margin-container-kitty">
          <img src={kitty} height={250} alt={'kitty'} />
        </div>
      </div>
      <div className="margin-container">
        <h4>margin: auto</h4>
        <div className="margin-container-box margin-container-left">margin: 20px 0;</div>
        <div className="margin-container-box margin-container-center">margin: 20px auto;</div>
        <div className="margin-container-box margin-container-right">margin: 20px 0 20px auto;</div>
        <div className="margin-desc">
          <p>margin:auto 的填充规则如下。</p>
          <p>(1)如果一侧定值，一侧 auto，则 auto 为剩余空间大小。</p>
          <p>(2)如果两侧均是 auto，则平分剩余空间。</p>
        </div>
      </div>
      <div className="margin-container">
        <div className="margin-container-box margin-container-absolute">
          <div className="margin-container-absolute-inner" />
        </div>
        <div className="margin-desc">
          <p>绝对定位下的 margin:auto 居中</p>
        </div>
      </div>
    </div>
  );
};

export default Margin;
