// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import Homepage from './Homepage';
import Layout from './Layout';
import HeightPercent from './demo/height/HeightPercent';
import WidthAuto from './demo/width/WidthAuto';
import Position from './demo/position/Position';
import FillAvailable from './demo/width/FillAvailable';
import MaxHeight from './demo/height/MaxHeight';
import Absolute from './demo/position/Absolute';
import OverflowHidden from './demo/overflow/OverflowHidden';
import Relative from './demo/position/Relative';
import TextDirection from './demo/font/TextDirection';
import Float from './demo/float/Float';
import ReplacedElementImg from './demo/element/ReplacedElementImg';
import UnitEx from './demo/height/UnitEx';
import Content from './demo/content/Content';
import LoadingDot from './demo/pseudo/LoadingDot';
import Taiji from './demo/pseudo/Taiji';
import Padding from './demo/box/Padding';
import Margin from './demo/box/Margin';
import Border from './demo/box/Border';
import Layers from './demo/layers/Layers';
import FontAlign from './demo/font/FontAlign';
import FontWeight from './demo/font/FontWeight';
import LetterSpacing from './demo/font/LetterSpacing';

export default {
  path: 'css',
  component: Layout,
  childRoutes: [
    { path: '', component: Homepage, isIndex: true },
    { path: 'height', component: HeightPercent, isIndex: true },
    { path: 'height/max', component: MaxHeight, isIndex: true },
    { path: 'height/ex', component: UnitEx, isIndex: true },
    { path: 'width', component: WidthAuto, isIndex: true },
    { path: 'width/fill', component: FillAvailable, isIndex: true },
    { path: 'position', component: Position, isIndex: true },
    { path: 'position/absolute', component: Absolute, isIndex: true },
    { path: 'position/relative', component: Relative, isIndex: true },
    { path: 'overflow/hidden', component: OverflowHidden, isIndex: true },
    { path: 'float', component: Float, isIndex: true },
    { path: 'element/img', component: ReplacedElementImg, isIndex: true },
    { path: 'content', component: Content, isIndex: true },
    { path: 'pseudo/loading', component: LoadingDot, isIndex: true },
    { path: 'pseudo/taiji', component: Taiji, isIndex: true },
    { path: 'box/padding', component: Padding, isIndex: true },
    { path: 'box/margin', component: Margin, isIndex: true },
    { path: 'box/border', component: Border, isIndex: true },
    { path: 'layers', component: Layers, isIndex: true },
    { path: 'font/direction', component: TextDirection, isIndex: true },
    { path: 'font/align', component: FontAlign, isIndex: true },
    { path: 'font/weight', component: FontWeight, isIndex: true },
    { path: 'font/fly', component: LetterSpacing, isIndex: true },
  ],
};
