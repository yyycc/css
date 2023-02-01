import React from 'react';
import MyIndexContainer from '../common/myIndexContainer/MyIndexContainer';
import heightPercent from '../../images/height-percent.jpeg';
import maxHeight from '../../images/max-height.jpeg';
import overflowHidden from '../../images/overflow-hidden.gif';
import text from '../../images/text.jpg';
import fillAvailable from '../../images/fill-available.gif';
import float from '../../images/float.jpg';
import hover from '../../images/hover.mp4';
import ex from '../../images/ex.gif';
import loading from '../../images/loading.gif';
import taiji from '../../images/taiji.jpg';
import padding from '../../images/padding.jpg';
import margin from '../../images/marginMerge.gif';
import border from '../../images/border.jpg';
import tape from '../../images/tape.jpg';
import fontAlign from '../../images/fontAlign.jpg';
import fontWeight from '../../images/fontWeight.jpg';
import widthAuto from '../../images/widthAuto.jpg';

export default function Homepage() {
  const colors = [
    '#f1ccb8',
    '#d9b8f1',
    '#dcff93',
    '#f6c06d',
    '#b8f1ed',
    '#e7dac9',
    '#f1b8e4',
    '#b8f1cc',
  ];
  const details = [
    {
      title: '百分比高度是如何计算的',
      detail: [
        '绝对定位的宽高百分比计算是相对于 padding box 的，也就是说会把 padding 大小值计算在内；',
        '非绝对定位元素则是相对于 content box 计算的，不会将 padding 计算在内',
      ],
      src: heightPercent,
      tags: ['height', '百分比计算', '绝对定位/相对定位'],
      router: '/css/height',
    },
    {
      title: '更多文字展开收起的效果实现',
      detail: [
        '使用 height + overflow:hidden时，因为我们展开的元素内容是动态的，换句话说高度是不固定的，' +
          '因此，height 使用的值是默认的 auto， 而auto 是个关键字值，并非数值，正如 height:100%的 100%无法和 auto 相计 算一样，' +
          '从 0px 到 auto 也是无法计算的，因此无法形成过渡或动画效果。',
      ],
      src: maxHeight,
      tags: ['overflow: hidden'],
      router: '/css/height/max',
    },
    {
      title: 'overflow: hidden的秘密',
      detail: [
        '元素设置了 overflow:hidden 声明，里面内容高度溢出的时候，滚动依然存在，仅仅滚动条不存在!' +
          '通过锚点定位就能发现滚动还是发生了。\n' +
          '锚点定位本质上是改变了 scrollTop 或 scrollLeft。',
      ],
      src: overflowHidden,
      tags: ['overflow: hidden'],
      router: '/css/overflow/hidden',
    },
    {
      title: '如何让多余文字的...显示在左边',
      detail: [
        'font 属性默认有这么一个特性，即可以改变替换元素或者 inline-block/\n' +
          'inline-table 元素的水平呈现顺序。' +
          '这种特性表现的作用就是我们可以兵不血刃地改变元素的 水平呈现顺序。',
      ],
      src: text,
      tags: ['ellipsis', 'direction', 'dir'],
      router: '/css/font/direction',
    },
    {
      title: '文字少居中显示，超过一行居左效果',
      detail: [
        '当文字只有一行时，span表现包裹性，宽度始终和字符长度一致，span的text-align: left不生效，' +
          '外部div的text-align: center生效，文字居中' +
          '当文字超过一行，span的宽度为一行宽度，而最后一行宽度大于该行文字宽度，span的text-align: left生效，文字居左',
      ],
      src: fillAvailable,
      tags: ['text-align', 'span', 'width'],
      router: '/css/width/fill',
    },
    {
      title: 'float实现文字环绕和布局',
      detail: [
        '浮动的本质就是为了实现文字环绕效果。而这种文字环绕，主要指的就是文字环绕图片显示的效果。' +
          '后来事情的发展超出了 CSS 设计者的意料，图文展示只是新时代 Web 展示的一小部分，而文字环绕这种上世纪风格的效果现在已然不流行了，' +
          '于是 float 很少发挥其原本的作用，反而被大肆使用满屏布局',
      ],
      src: float,
      tags: ['float', '布局', '文字环绕'],
      router: '/css/float',
    },
    {
      title: 'hover时显示不同图片',
      detail: [
        '替换元素之所以为替换元素，就是因为其内容可替换，而这个内容就是 margin、border、 padding和content这4个盒子中的content box，' +
          '对应的CSS属性是content，所以，从 理论层面讲，content 属性决定了是替换元素还是非替换元素',
      ],
      src: hover,
      srcType: 'video',
      tags: ['content', '替换元素'],
      router: '/css/element/img',
    },
    {
      title: '文字图标垂直居中',
      detail: [
        'ex 是 CSS 中的一个相对单位，指的是小写字母 x 的高度。' +
          '由于字母 x 受字体等 CSS 属性影响大，不稳定，因此 ex 不太适合用来限定元素的尺寸。' +
          '内联元素默认是基线对齐的，而基线就是 x 的底部，而 1ex 就是一个 x 的高度。' +
          '图标高度1ex，同时背景图片居中，图标和文字就能垂直居中，而且完全不受字体和字号的影响',
      ],
      src: ex,
      tags: ['ex', 'height'],
      router: '/css/height/ex',
    },
    {
      title: '实现...动画效果',
      detail: [
        "'\\A'其实指的是换行符中的 LF 字符，其 Unicode 编码是 000A，在 CSS 的 content 属性中则直接写作'\\A'" +
          "我们可以利用这里的'\\A'换行特性让“...”这几个字符动起来",
      ],
      src: loading,
      tags: ['伪元素', 'content'],
      router: '/css/pseudo/loading',
    },
    {
      title: '利用伪元素实现太极',
      detail: [
        '::before 和 ::after 伪元素的初衷是用于插入内容——不受文档约束，也不影响文档本身（比如，不影响 DOM），只影响最终的样式。',
        '目前最多见的应用情形的确是把它们用成 content: "" 这样的空元素，然后给这个空元素加上各种样式。',
      ],
      src: taiji,
      tags: ['伪元素', 'content', 'position'],
      router: '/css/pseudo/taiji',
    },
    {
      title: 'padding',
      detail: [
        'padding 属 性是不支持负值的.',
        'padding 支持百分比值，padding 百分比值无论是水平方向还是垂直方向均是相对于宽度计算的',
      ],
      src: padding,
      tags: ['伪元素', 'padding', 'background-clip'],
      router: '/css/box/padding',
    },
    {
      title: 'margin合并',
      detail: [
        'margin 合并有 3 种场景：1）相邻兄弟元素 margin 合并；2）父级和第一个/最后一个子元素；3）空块级元素的 margin 合并。',
        '对于兄弟元素的 margin 合并其作用和 em 类似，都是让 图文信息的排版更加舒服自然。',
      ],
      src: margin,
      tags: ['margin', 'margin合并'],
      router: '/css/box/margin',
    },
    {
      title: '利用border实现三角形',
      detail: [
        'border-width 却不支持百分比。',
        'border-style 的默认值是 none。',
        'border-color 默认颜色就是 color 色值',
      ],
      src: border,
      tags: ['border'],
      router: '/css/box/border',
    },
    {
      title: 'width',
      detail: [
        'fill-avaliable： 100%父级容器',
        'shrink-to-fit： 正好包裹住内部元素',
        'min-content： 收缩为最小宽度',
      ],
      src: widthAuto,
      tags: ['width'],
      router: '/css/width',
    },
    {
      title: '标题胶带',
      detail: [
        '渐变背景色：',
        'linear-gradient(',
        'to bottom, #f4f39e, #f5da41 60%, #fe6',
        ')',
        '旋转transform: rotate(-5deg)',
      ],
      src: tape,
      tags: ['transform', 'after'],
      router: '/css/layers',
    },
    {
      title: '文字垂直居中',
      detail: [
        '多行文字使用一个标签包裹，然后设置 display 为 inline-block。',
        '产生一个非常关键的“行框盒子”。我们需要它附带的一个产物— “幽灵空白节点”，' +
          '即一个宽度为 0、表现如同普通字符的看不见的“节点”。' +
          '有了这个“幽灵空白节点”，我们的 line- height:120px 就有了作用的对象',
      ],
      src: fontAlign,
      tags: ['内联', 'vertical-align'],
      router: '/css/font/align',
    },
    {
      title: 'font-weight',
      detail: [
        'font-weight的属性值支持100~900 的整百数',
        'font-weight 要想真正发挥潜力，问题不在于 CSS 的支持，而在于是否存在对应的字体文件',
        '如果没有对应的字体，又想要多档字重效果，这就需要用到@font-face',
      ],
      src: fontWeight,
      tags: ['@font-face', 'font-weight'],
      router: '/css/font/weight',
    },
  ];
  return (
    <div className="css-home-page">
      {details.map((del, index) => {
        del.color = colors[index % 8];
        del.title = `${index + 1}. ${del.title}`;
        return (
          <div className="css-home-page-timeline" key={index}>
            <MyIndexContainer {...del} />
          </div>
        );
      })}
    </div>
  );
}
