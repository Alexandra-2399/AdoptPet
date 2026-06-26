COMPONENTE: de utilizan para separar las distintas funciones de la App. 

¿Por qué es el adecuado?
R: Le da orden al codigo y permite reutilizar partes de la interfaz que nos facilita el mantenimiento del proyecto 

JSX: se usa para construir la interfaz de la app, mostrando en este caso las tarjetas, botones y filtros que ocupamos 

¿Por qué es el adecuado?
R: porque nos permite mostrar la estructura visual de la app 

PROPS: se utiliza para enviar la info de cada mascota, desde ListaMascotas hacia MascotaCard, (nombres,raza,edad,especie y descripcion)

¿Por qué es el adecuado?
R: porque permite comaprtir datos entre componentes sin duplicar la info, haciendo que cada una tenga una funcion especifica

ESTADO (USESTATE): Se utiliza en app.jsx para guardar la especie seleccionada y el texto que ingresamos en el buscador 

¿Por qué es el adecuado?
R: porque permite que la app actualice automaticamente la interfaz cuando cambiamos el nombre, cambiamos los filtros o al hacer la busqueda

RENDERIZADO (.map() + key): se utiliza para recorrer el arreglo de cada mascota, y crear una tarjeta para cada una de ellas

¿Por qué es el adecuado?
R: .map() evita que escribamos lo mismo varias veces y Key ayuda a identificar correctamente cada elemento de la lista

RENDERIZADO CONDICIONAL: se utiliza para mostrar el mensaje "No hay mascotas que coincidan" cuando no existe resultado de la busaueda realizada y para destacar el mensaje de las mascotas qwue necesitan adiopcion urgente

¿Por qué es el adecuado?
R: porque permite mostrar distintos elementos egun una condicion, mejoranodo la exp. del ususario y logrando que la app sea mas dinamica 