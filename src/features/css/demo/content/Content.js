import React, { useState } from 'react';

const Content = () => {
  const [list, setList] = useState([
    { height: '230px', color: 'rgb(128, 81, 71)' },
    { height: '101px', color: 'rgb(72, 34, 103)' },
    { height: '235px', color: 'rgb(8, 66, 21)' },
    { height: '130px', color: 'rgb(6, 16, 105)' },
  ]);
  return (
    <div className="content">
      <h4>辅助实现“两端对齐”以及“垂直 居中/上边缘/下边缘对齐”效果</h4>
      <div className="content-container">
        <div className="content-container-box">
          {list.map((ele, index) => (
            <i
              key={index}
              className="bar"
              style={{ height: ele.height, backgroundColor: ele.color }}
            />
          ))}
        </div>
      </div>

      <div className="content-desc"></div>
    </div>
  );
};

export default Content;
