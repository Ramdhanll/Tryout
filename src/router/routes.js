import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import Exam from '../views/Exam'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/exam',
    name: 'exam',
    component: Exam
  },

]

export default routes