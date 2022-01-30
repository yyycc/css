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
import TextDirection from './demo/direction/TextDirection';
import Float from './demo/float/Float';

export default {
  path: 'css',
  component: Layout,
  childRoutes: [
    { path: '', component: Homepage, isIndex: true },
    { path: 'height', component: HeightPercent, isIndex: true },
    { path: 'height/max', component: MaxHeight, isIndex: true },
    { path: 'width', component: WidthAuto, isIndex: true },
    { path: 'width/fill', component: FillAvailable, isIndex: true },
    { path: 'position', component: Position, isIndex: true },
    { path: 'position/absolute', component: Absolute, isIndex: true },
    { path: 'position/relative', component: Relative, isIndex: true },
    { path: 'overflow/hidden', component: OverflowHidden, isIndex: true },
    { path: 'direction', component: TextDirection, isIndex: true },
    { path: 'float', component: Float, isIndex: true },
  ],
};
