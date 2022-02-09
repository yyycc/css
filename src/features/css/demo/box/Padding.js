import React from 'react';

const Padding = () => {
  return (
    <div className="padding">
      <div className="padding-container">
        <h4>padding实现高度可控的分割线</h4>
        <div className="padding-container-box">
          <span className="padding-container-box-login">登录</span>
          <span className="padding-container-box-register">注册</span>
        </div>
        <div className="padding-container-content">
          <span className="padding-container-content-box">登录</span>
          <span className="padding-container-content-box">注册</span>
        </div>
      </div>
      <div className="padding-container">
        <h4>padding + background-clip</h4>
        <div className="padding-container-menu"/>
        <div className="padding-container-dot"/>
      </div>

      <div className="padding-desc"></div>
    </div>
  );
};

export default Padding;
