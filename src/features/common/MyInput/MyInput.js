import React from 'react';
const MyInput = props => {
  return (
    <div className="my-input">
      <input {...props} className="my-input-inner" />
    </div>
  );
};

export default MyInput;
