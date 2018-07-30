import ProductModal from './components/ProductModal.vue'
import Checkout from './components/views/Checkout.vue'
import Home from './components/views/Home.vue'
import Store from './components/views/Store.vue'
import Payment from './components/views/Payment.vue'


    const routes = [
        { path: '/', 
        component: Home,
        name: 'home',
        children:[
            {
            path: '/product/:id', 
            component: ProductModal,
            name:'ProductModal'
            }]
       },
       {
           path: '/checkout',
           component: Checkout,
           name: 'checkout',
       },
       {
        path: '/store',
        component: Store,
        name: 'store',
        children:[
            {
            path: '/product/:id', 
            component: ProductModal,
            name:'ProductModalStore'
            }]
        },
        {
            path: '/payment',
            component: Payment,
            name: 'payment',
        },
        { path: '*', redirect: '/' }
        // { path: '/bar',  component: Bar }
    
        // {
        //   path: '/coins/:id',
        //   name: 'Coins',
        //   component: Coins
        // }
      ]

export default routes