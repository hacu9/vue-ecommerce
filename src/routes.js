import Emenu from './components/Emenu.vue'
import Products from './components/Products.vue'
import ProductModal from './components/ProductModal.vue'
import Checkout from './components/Checkout.vue'

    const routes = [
        { path: '/', 
        components: {
            default: Products,
            nav : Emenu
        } ,
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
           name: 'Checkout'
       }
        // { path: '/bar',  component: Bar }
    
        // {
        //   path: '/coins/:id',
        //   name: 'Coins',
        //   component: Coins
        // }
      ]

export default routes