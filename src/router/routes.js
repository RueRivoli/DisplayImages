import VueRouter from 'vue-router'

import AvailableImages from './../components/AvailableImages';
import FavouriteImages from './../components/FavouriteImages';

const routes = [
  { path: '/', name:'AvailableImages', component: AvailableImages },
  { path: '/favoriteimages', name:'FavouriteImages', component: FavouriteImages },
]
  const router = new VueRouter({
    mode: 'history',
    routes
  })

export default router;