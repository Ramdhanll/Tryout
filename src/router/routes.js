import Login from '../views/Login'
import Register from '../views/Register'
import Dashboard from '../views/Dashboard'
import Profile from '../views/Profile'
import Exam from '../views/Exam'
import Result from '../views/Result'
import About from '../views/About'
import Detail_exam from '../views/Detail_exam'
import Test from '../views/test'

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
    path: '/exam/:slug',
    name: 'exam',
    component: Exam
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/detail/:id',
    name: 'detail_exam',
    component: Detail_exam
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }

]

export default routes