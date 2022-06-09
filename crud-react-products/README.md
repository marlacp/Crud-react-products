
### Create-react-product

Este proyecto permite al usuario, crear credenciales, y loguearse, para insertar nuevos productos, editar o eliminarlos. Fue desarrollado con el framework React Js, y cuenta con un back-end en firebase.

###Instalación 

Descargas el proyecto, y en tu consola corres el comando:
`$ npm install `

Una vez ejecutado, instalara todas las dependencias, y corres el proyecto con:

`$ npm start`

Una vez ejecutado te aparecera una interfaz como esta:

![](https://i.postimg.cc/MH4Z6Hxx/Sign-up.png)

Ahora para ingresar debemos crear nuestra credencial, para ello, ingresamos un correo y una contraseña, y le damos clic al botón "Sign up" de esta manera:

![](https://i.postimg.cc/L5sBdC4w/creacion-de-credencial.png)

Automáticamente ingresa al siguiente formulario.

![](https://i.postimg.cc/90S96cnw/Formulario.png)

Ahora ingresamos un nuevo producto, llenando el formulario y dando clic en el botón save, de la siguiente manera:

![](https://i.postimg.cc/9z5MP0kb/product-new.png)

Como resultado, en la parte inferior del formulario, obtenemos un nuevo producto:
![](https://i.postimg.cc/nr77fybd/resultado-new.png)

Contamos con la opción de editar el producto que ingresamos,  realizando click en el botón edit. Aparece la información del producto sobre el formulario, realizamos el ajuste en este caso cambiamos su stock a 20, y damos clic en el botób update, de la siguiente manera:

![](https://i.postimg.cc/667FGYfY/edit-form.png)

Al aplicar los cambios, lo vemos reflejado instantaneamente. 
![](https://i.postimg.cc/28DT8wcq/resultado-edit.png)

Si deseas, puedes eliminar productos, con el botón "Delete", y finalmente puedes salir de la interfaz con el botón "logout" superior derecha. 

En el repositorio encontrarás el código del proyecto, el desarrollo del proyecto empieza por el archivo App.js, tiene el código de login para conectarse con firebase, y a su vez contiene los componentes principales, el componente “login” que es el desarrollo de ingreso y creación de credenciales y el componente “hero” que representa la sección del formulario de productos. Los componentes están ubicados en la carpeta “components”. El componente “hero”, tiene el diseño del nav, el botón “logout”, y llama al componente del formulario denominado “Products”, aquí tenemos el desarrollo del formulario y a su vez contiene el componente, ProductoForm, donde visualizamos los productos creados.
