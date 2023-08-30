import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookingView from '../views/BookingView.vue'
import AccountView from '../views/AccountView.vue'
import SignUpView from '../views/SignUpView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/booking',
    name: 'booking',
    component: BookingView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async(to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if(await getAuth().currentUser) {
      next();
    } else {
      alert("You don't have access!")
      next("/signup")
    }
  } else {
    next()
  }
})

export default router
