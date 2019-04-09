import HomeComponent from './components/HomeComponent'
import ProductsComponent from './components/ProductsComponent'
import TasksComponent from './components/TasksComponent'
import Component404 from './components/Component404'

const routes = [{
    path: '/',
    component: HomeComponent,
    name: 'home'
  },
  {
    path: '/produtos',
    component: ProductsComponent,
    name: 'produto'
  },
  {
    path: '/tarefas/:id',
    component: TasksComponent,
    name: 'tarefa',
    props: true
  },
  {
    path: '/redirect',
    redirect: '/produtos',
  },
  {
    path: '*',
    component: Component404,
    name: '404'
  },
];


export default routes;
