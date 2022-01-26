// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { Layout } from './';
import Homepage from './Homepage';

export default {
  path: 'css',
  component: Layout,
  childRoutes: [{ path: '', component: Homepage, isIndex: true }],
};
