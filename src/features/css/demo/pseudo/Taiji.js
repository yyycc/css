import React from 'react';

const Taiji = () => {
  return (
    <div className="taiji">
      <div className="taiji-container">太极，下面是两种实现方式，嗯，一毛一样</div>
      <div className="taiji-container">
        <div className="taiji-container-content">
          <div className="taiji-container-content-yin" />
          <div className="taiji-container-content-yang" />
        </div>
        <div className="taiji-container-content">
          <div className="taiji-container-content-yinyang" />
        </div>
      </div>
      <div className="taiji-container">第一种拆解一下</div>
      <div className="taiji-container">
        <div className="taiji-container-content-split">
        </div>
        <div className="taiji-container-content">
        </div>
        <div className="taiji-container-content">
          <div className="taiji-container-content-yin-split" />
        </div>
        <div className="taiji-container-content">
          <div className="taiji-container-content-yin" />
        </div>
        <div className="taiji-container-content">
          <div className="taiji-container-content-yin" />
          <div className="taiji-container-content-yang-split" />
        </div>
        <div className="taiji-container-content">
          <div className="taiji-container-content-yin" />
          <div className="taiji-container-content-yang" />
        </div>
      </div>
      <div className="taiji-container">第二种拆解一下</div>
      <div className="taiji-container">
        <div className="taiji-container-content-split">
        </div>
        <div className="taiji-container-content">
        </div>
        <div className="taiji-container-content">
          <div className="taiji-container-content-yinyang-split" />
        </div>
        <div className="taiji-container-content">
          <div className="taiji-container-content-yinyang" />
        </div>
      </div>
    </div>
  );
};

export default Taiji;
