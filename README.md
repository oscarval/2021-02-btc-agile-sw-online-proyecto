# 2021-02-btc-agile-sw-online-proyecto

<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/githubagilesoftware.jpg" >	
</p>

## Workflow

```
Forkea el proyecto y trabaja en tu rama.
Commitea de vez en cuando las 'features' que vayas desarrollando.
Una vez lo creas necesario, haz un 'pull request' a la rama Master.
Avísanos por el slack del curso.
```

## Información

```
Nombre del proyecto : Vending Showcase
Descripción: Vending machine to present a Showcase of products (fruits and vegetables)
Alumno: Oscar Alexis Valdez Morillo
```

Se ha re-utilizado el proyecto final del módulo de Backend, y se ha trabajado sobre el<br />
https://github.com/oscarval/GH_back_final_showcase_mongodb

El vídeo con la explicación de mi defensa, se puede consultar en el siguient enlace:<br />
https://drive.google.com/file/d/1mcK1bW8ALO_9GrpC7uTCdlsAYUgKJpgs/view?usp=sharing
https://drive.google.com/file/d/1EffQhpT3_33gpTWsGXLaXPuILIPr0M7K/view?usp=sharing

## Tecnología, lenguajes y frameworks

En este proyecto, he usado los siguientes:

- Nodesjs
- Express - API server
- Jest - unit test
- MongoDB - database
- Moongose - ODM
- Reactjs - framework to javascript
- Typescript - languaje typed of javascript
- Cypress - E2E test

## Principios SOLID

SRP `app/src/utils/Utils.tsx` _formatCurrency_ Método con unica finalidad de formatear a currency<br />
SRP `api/src/utils/utils-response.ts` _UtilsResponse_ clase para dar formato a la response de la API<br />
OCP `api/src/routes/custom-route.ts` _CustomRoute_ clase abstracta apta para extender y para polimorfismo<br />
OCP LSP `api/src/controllers/controller.ts` _Controller_ clase abstracta que implementa interfaz IController `api/src/controllers/controller.interface.ts` que usaremos para extender ProductController `api/src/controllers/product/base-product-controller.ts` y ShoppingCartController`api/src/controllers/shopping-cart/base-shopping-cart-controller.ts`. Se implementa así, para poder utilizar polimorfismo en la siguiente clase<br />
OCP LSP DIP `api/src/routes/custom-route.ts` _CustomRoute_ clase abstracta para setear las ruotes necesarias en el proyecto, haciendo el polimorfismo en la propiedad `controller` cuando se instancia esta clase, en `api/src/routes/products.ts` y `api/src/routes/shoppingCart.ts`, y se pasa en el constructor el controlador, que extenderá de la clase Controller<br />
SRP `api/src/config/mongoose-database.ts` _MongooseDataBase_ clase con unica finalidad de interactuar con mongoDB. Además, se aplica el patrón singleton, ya que se instancia solo una vez.<br />

## Patrones

singleton `api/src/config/mongoose.ts` MongooseDataBase Para connectar con una única instancia a mongoDB

## Refactors

- Foreign Method `api/src/utils/utils-response.ts` _class UtilsResponse_<br />
- Pull Up Method and Extract Interface `api/src/controllers/controller.ts` _method abstract update_<br />
- Pull Up Method `api/src/controllers/product/base-product-controller.ts` _method update_<br />
- Pull Up Method `api/src/controllers/shopping-cart/base-shopping-cart-controller.ts` _method update_<br />

- Extract Hierarchy `api/src/routes/custom-route.ts` `api/src/routes/products.ts` `api/src/routes/shoppingCart.ts`<br />
- Extract Hierarchy `api/src/controllers/controller.ts` `api/src/controllers/product/base-product-controller.ts` `api/src/controllers/shopping-cart/base-shopping-cart-controller.ts` `api/src/controllers/product/productController.ts` `api/src/controllers/shopping-cart/shopping-cart-controller.ts`<br />

## Notas

Para poder observar lo distintos cambios que ha tomado el refactor, se puede consultar los siguientes branchs<br />
https://github.com/oscarval/2021-02-btc-agile-sw-online-proyecto/blob/feature/config-routes-models-controllers/api/src/controllers/productController.ts

https://github.com/oscarval/2021-02-btc-agile-sw-online-proyecto/blob/feature/config-routes-models-controllers/api/src/routes/products.ts

https://github.com/oscarval/2021-02-btc-agile-sw-online-proyecto/blob/feature/config-routes-models-controllers/api/src/config/mongoose.ts

https://github.com/oscarval/2021-02-btc-agile-sw-online-proyecto/blob/feature/config-routes-models-controllers/api/src/routes/products.ts

Además, al haber re-aprovechado este proyecto (como proyecto final del curso de Backend), se ha realizado cambios:

- Back: refactorizar el código, pasando a clases de typescript los diferentes controladores, utils, models.
- Front: igualmente, refactorizar los servicios, pasando a clases de typescript
