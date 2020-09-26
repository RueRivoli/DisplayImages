import VueRouter from 'vue-router'

import AvailableImages from './../components/AvailableImages';

const routes = [
  { path: '/', name:'AvailableImages', component: AvailableImages },
]
  const router = new VueRouter({
    mode: 'history',
    routes
  })

export default router;