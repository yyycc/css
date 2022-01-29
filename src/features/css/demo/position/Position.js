import React from 'react';
const Position = () => {
  return (
    <div className="position">
      <div className="position-format-width">
        <h4>格式化宽度</h4>
        <div className="position-absolute bg-purple">position: absolute</div>
        <div className="position-absolute position-left bg-purple margin-top">
          position: absolute; left: 40px; right: 90px;
        </div>
      </div>
    </div>
  );
};

export default Position;
