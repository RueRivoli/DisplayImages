import VueRouter from 'vue-router'
import Images from './../components/Images';
import ViewImage from './../components/ViewImage';

const routes = [
  { path: '/', name:'Images', component: Images },
  { path: '/viewimage/:id', name:'ViewImage', component: ViewImage, props: route => ({ id: route.params.id}) },
]
  const router = new VueRouter({
    mode: 'history',
    routes
  })

export default router;