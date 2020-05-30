import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import Profile from '../views/Profile'
import Exam from '../views/Exam'

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/exam',
    name: 'exam',
    component: Exam
  },

]

export default routes