<template>
    <footer>
        <div class="container-fluid bg-secondary ">

            <div class="footer-top container p-4">
               <div class=" row justify-content-center align-items-center">
                    <div class="col-md-3 col-6">   
                 <svg width="80" height="100" viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg" focusable="false" class="d-block"><title>Bootstrap</title><path fill="currentColor" d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"></path><path fill="currentColor" d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z"></path></svg>
                </div>

                <div class="col-md-3 col-6">   
                    <ul class="list-group">
                     <router-link tag="li" class="" :to="{name: 'home'}">
                   <a class="nav-link">Home</a>
                  </router-link>

                   <router-link tag="li" class="" :to="{name: 'store'}">
                   <a class="nav-link">Store</a>
                  </router-link>

                   <router-link tag="li" class="" :to="{name: 'checkout'}">
                   <a class="nav-link">Checkout</a>
                  </router-link>

                   <router-link tag="li" class="" :to="{name: 'payment'}">
                   <a class="nav-link">Payment</a>
                  </router-link>
                   
                    </ul>
                </div>

                <div class="col-md-4 col-sm-12 text-center">   
                <h4 class="mb-2">Contactanos</h4>
                
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email">
                    <button class="btn btn-outline-primary btn-block">Enviar</button>
                </div>
                </div>
               </div>
           </div>

          

            <div class="h-100"></div>
            <div class="row justify-content-center footer-bottom bg-primary p-3" >
            coded by &nbsp;<a href="https://github.com/hacu9/" class="text-white text-shadow" >hacu9</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'efooter',

}
</script>

<style>
ul{
    list-style: none;
}
</style>

