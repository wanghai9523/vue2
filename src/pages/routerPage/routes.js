
import Home from './componentPage/Home';
import About from './componentPage/About';


const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home/:id', component: Home },
    { path: '/home', component: Home },
  { path: '/about/:id', component: About },
  { path: '/about', component: About },
]

export default routes;