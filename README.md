# Vue ECommerce SPA

Quise desarrollar una SPA lo mas funcional, reactiva, animada y con las mejores practicas que conozco

Uno de los principales problemas que encontre fue el estado de la data, Lo cual inicialmente resolvi con un Event Bus, pero mientras mas crecia la aplicacion mas complicado se volvia  

Di solucion a ello implementando Vuex,en adicion a ello inclui componentes externos que me ayudaran a dar la sensacion y estilos de una ecommerce totalmente funcional

Sin embargo he creado variados componentes a la par para asi ir implementando todas las funcionalidades requeridas en el reto 

1. Para Mostrar las categorias se utiliza un componente recursivo 
2. Los productos se puden filtrar por categoria
3. Se pueden filtrar por disponibilidad, rango de precios y cantidad en stock
4. Se pueden ordenar por precio, disponibilidad (mientras no este siendo filtrada), y cantidad disponible 
5. Posee un carrito donde persiste la informacion gracias a localStorage, se pueden modificar la cantidad deseada, eliminar o agregar productos al mismo
6. Al estar en una categoria hija sin mas subniveles, se muestra un input para buscar(por nombre) en toda la tienda el producto deseado

#####  Este proyecto usa Vue, Vue-Router y Vuex 

### To Do

- [ ] Mejorar diseño
- [ ] Implementar Testing


## Instalar dependencias
```
npm install
```

### Compilar y servir para desarrollo
```
npm run serve
```

### Compilar y procesar para produccion
```
npm run build
```


