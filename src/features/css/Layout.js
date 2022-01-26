import React from 'react';
import image from '../../images/image.png'

export default function Layout({ children }) {
  return (
    <div className="css-layout">
      <div className="css-header">
        <img className="css-header-image" src={image} height={'40px'} width={'40px'} />
        <span>CSS Demo</span>
      </div>
      <div className="css-page-container">{children}</div>
    </div>
  );
}
