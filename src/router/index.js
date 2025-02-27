import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Products from '../pages/Products.vue';
import Services from '../pages/Services.vue';
import StarterSites from '../pages/services/StarterSites.vue';
import Ecommerce from '../pages/services/Ecommerce.vue';
import SEO from '../pages/services/SEO.vue';
import Consulting from '../pages/services/Consulting.vue';
import Contact from '../pages/Contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Freelance Web Pro - Professional Web Development Services'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'About Us - Freelance Web Pro'
      }
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: {
        title: 'Web Development Products - Freelance Web Pro'
      }
    },
    {
      path: '/products/starter-sites',
      name: 'Starter Sites',
      component: StarterSites,
      meta: {
        title: 'Starter Sites - Freelance Web Pro'
      }
    },
    {
      path: '/products/e-commerce-sites',
      name: 'E-Commerce Sites',
      component: Ecommerce,
      meta: {
        title: 'E-Commerce Sites - Freelance Web Pro'
      }
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
      meta: {
        title: 'Web Development Services - Freelance Web Pro'
      }
    },
    {
      path: '/services/SEO',
      name: 'SEO',
      component: SEO,
      meta: {
        title: 'SEO Service - Freelance Web Pro'
      }
    },
    {
      path: '/services/consulting',
      name: 'Consulting',
      component: Consulting,
      meta: {
        title: 'Consulting - Freelance Web Pro'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Contact Us - Freelance Web Pro'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }; // Scrolls to top with smooth animation
  }
})

// Update page title for SEO
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Freelance Web Pro'
  next()
})

export default router
