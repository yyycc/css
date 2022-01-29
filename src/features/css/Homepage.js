import React from 'react';
import MyIndexContainer from '../common/myIndexContainer/MyIndexContainer';
import heightPercent from '../../images/height-percent.jpeg';
import maxHeight from '../../images/max-height.jpeg';
import overflowHidden from '../../images/overflow-hidden.gif';
import text from '../../images/text.jpg';
import fillAvailable from '../../images/fill-available.gif';

export default function Homepage() {
  const colors = ['#d9b8f1', '#dcff93', '#f1ccb8', '#b8f1ed', '#f1b8e4', '#b8f1cc', '#e7dac9'];
  const details = [
    {
      title: '百分比高度是如何计算的',
      detail:
        '绝对定位的宽高百分比计算是相对于 padding box 的，也就是说会把 padding 大小值计算在内；' +
        '非绝对定位元素则是相对于 content box 计算的，不会将 padding 计算在内',
      src: heightPercent,
      tags: ['height', '百分比计算', '绝对定位/相对定位'],
      router: '/css/height',
    },
    {
      title: '更多文字展开收起的效果实现',
      detail:
        '使用 height + overflow:hidden时，因为我们展开的元素内容是动态的，换句话说高度是不固定的，' +
        '因此，height 使用的值是默认的 auto， 而auto 是个关键字值，并非数值，正如 height:100%的 100%无法和 auto 相计 算一样，' +
        '从 0px 到 auto 也是无法计算的，因此无法形成过渡或动画效果。',
      src: maxHeight,
      tags: ['overflow: hidden'],
      router: '/css/height/max',
    },
    {
      title: 'overflow: hidden的秘密',
      detail:
        '元素设置了 overflow:hidden 声明，里面内容高度溢出的时候，滚动依然存在，仅仅滚动条不存在!' +
        '通过锚点定位就能发现滚动还是发生了。\n' +
        '锚点定位本质上是改变了 scrollTop 或 scrollLeft。',
      src: overflowHidden,
      tags: ['overflow: hidden'],
      router: '/css/overflow/hidden',
    },
    {
      title: '如何让多余文字的...显示在左边',
      detail:
        'direction 属性默认有这么一个特性，即可以改变替换元素或者 inline-block/\n' +
        'inline-table 元素的水平呈现顺序。' +
        '这种特性表现的作用就是我们可以兵不血刃地改变元素的 水平呈现顺序。',
      src: text,
      tags: ['ellipsis', 'direction', 'dir'],
      router: '/css/direction',
    },
    {
      title: '文字少居中显示，超过一行居左效果',
      detail:
        '当文字只有一行时，span表现包裹性，宽度始终和字符长度一致，span的text-align: left不生效，' +
        '外部div的text-align: center生效，文字居中' +
        '当文字超过一行，span的宽度为一行宽度，而最后一行宽度大于该行文字宽度，span的text-align: left生效，文字居左',
      src: fillAvailable,
      tags: ['text-align', 'span', 'width'],
      router: '/css/width/fill',
    },
  ];
  return (
    <div className="css-home-page">
      {details.map((del, index) => {
        del.color = colors[index % 8];
        return (
          <div className="css-home-page-timeline">
            <MyIndexContainer {...del} />
          </div>
        );
      })}
    </div>
  );
}
