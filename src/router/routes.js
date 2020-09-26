import VueRouter from 'vue-router'

import AvailableImages from './../components/AvailableImages';
import ViewImage from './../components/ViewImage';

const routes = [
  { path: '/', name:'AvailableImages', component: AvailableImages },
  { path: '/viewimage/:id', name:'ViewImage', component: ViewImage, props: route => ({ id: route.params.id }) },
]
  const router = new VueRouter({
    mode: 'history',
    routes
  })

export default router;