import HomeComponent from './components/home/HomeComponent'
import TaskComponent from './components/tasks/TaskComponent'

export default [
    {
        path: '/',
        component: HomeComponent,
        name: 'home'
    },
    {
        path: '/tasks',
        component: TaskComponent,
        name: 'tasks'
    },
]