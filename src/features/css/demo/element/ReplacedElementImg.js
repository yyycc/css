import React from 'react';
import kitty from '../../../../images/kitty.jpeg';

const ReplacedElementImg = () => {
  return (
    <div className="replaced-element">
      <h4>替换元素img</h4>
      <div className="replaced-element-container">
        <img src={kitty} />
        <img src={kitty} height={200} />
        <img src={kitty} height={200} className="replaced-element-container-img" />
        <div>从左到右显示的分别是img故有尺寸、html尺寸和css尺寸</div>
      </div>
      <div className="replaced-element-container">
        <img alt="kitty" height={200} src={kitty} className="replaced-element-container-change"/>
      </div>
      <div>hover换猫</div>
      <div className="replaced-element-desc"></div>
    </div>
  );
};

export default ReplacedElementImg;
