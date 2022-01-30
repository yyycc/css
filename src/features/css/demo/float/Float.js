import React, { useState } from 'react';
import kitty from '../../../../images/kitty.jpeg';

const Float = () => {
  const [float, changeFloat] = useState(false);
  return (
    <div className="float">
      <div className="float-container">
        <div className="float-container-around">
          <h4 title="点击按钮实现文字环绕">利用浮动实现文字环绕效果</h4>
          <div>
            <img src={kitty} width={80} height={80} style={float ? { float: 'left' } : {}} />
          </div>
          <p>把文字放到这只可爱的眼镜猫猫身边来，这样它就不需要再戴眼镜啦</p>
          <button onClick={() => changeFloat(true)}>浮动</button>
          <button className="float-container-around-reset" onClick={() => changeFloat(false)}>
            重置
          </button>
        </div>
        <div className="float-container-table">
          <h4>利用浮动实现布局</h4>
          <div className="float-container-table-box">1</div>
          <div className="float-container-table-box margin-left">2</div>
          <div className="float-container-table-box margin-left">3</div>
          <div style={{ clear: 'both' }}>clear: both</div>
          <div className="float-container-table-box margin-top">4</div>
          <div className="float-container-table-box margin-left margin-top">5</div>
          <div style={{ clear: 'both' }} />
          <p>每个块都加上float: left，需要换行就clear: both清除浮动</p>
        </div>
      </div>
    </div>
  );
};

export default Float;
