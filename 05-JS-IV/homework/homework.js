/*
Objetos: 
	
	Es un contenedor de datos que tiene mucha información sobre una cosa. Estos se instancian con llaves {}. Dentro
	de las mismas van a estar los llamados clave : valor donde clave es el identificador y valor es el que 
	queremos guardar en dicha clave. Los objetos tienen que estar separados con coma (,) . Ejemplo:
	
		var usuario = {
			nombre : "Dario",
			apelido : "Paez",
		}	


Propiedades

	Las propiedades son variables adjunta a los objetos definiendo las características del mismo y se puede 
	acceder a la propiedad de un objeto mediante la notación de puntos. Ejemplo: 

		nombre del objeto . nombre de la clave

Métodos:

	Son funciones guardadas en objetos, es decir que son la propiedad del objeto. Se puede usar una palabra
	clave para el nombre y el valor para una función o podemos llamarlo con un argumento. Se llama mediante 
	la notación de puntos y paréntesis al final (). Ejemplo: 
		
		var objeto = {
		 decirHola = function () {
			return "Hola";
		 }
		}
Bucle for…in
 	
	Se utiliza para iterar cada clave : valor que tengamos en un objeto. Esto se hace declarando una variable
	, la clave, in y el nombre del objeto; todo esto entre paréntesis. 
		
		for(var nombre in usuario){
		return nombre;
			o
		return usuario[nombre];

Notación de puntos vs notación de corchetes

	La notación de puntos es cuando llamamos al nombre del objeto . nombre de clave. Ejemplo:
	
		usuario.nombre;

	La notación de corchetes es cuando escribimos nombre del objeto[nombre de clave] ésta última puede ser una
	cadena o número y tiene que estar entre comillas dentro de los corchetes y también puede ser una variable 
	que apunte a una cadena o número. Basandonos en el ejemplo de "Objetos"
		
		usuario["nombre"];
 			o
		var passString = password;
		usuario[passString];
*/




// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var obj = {
    nombre : nombre,
    edad: edad,
    meow: function () {
      return "Meow!";
    }
  };
    return obj;º
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
    return objeto ;
  
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
 
  var result = objetoMisterioso.numeroMisterioso * 5
    return result; 
  
}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
    return objeto;
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var user = {
    nombre : nombre,
    email : email, 
    password : password,
  };
    return user; 
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario["email"]) {
    return true;
  } else {
    return false;
  }
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad]) {
    return true;
  } else {
    return false; 
  }
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  return usuario["password"] === password;
} 

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword
  return usuario;
  
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo); 
    return usuario; 
}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (var i = 0 ; i < usuarios.length ; i++) {
    usuarios[i].esPremium = true;
  } 
  return usuarios; 
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var suma = 0; 
  for (var i = 0 ; i < usuario.posts.length ; i++) {
    suma = suma + usuario.posts[i].likes; 
  }
  return suma;
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function() {
    return this.precio - (this.precio * this.porcentajeDeDescuento); 
  };
  return producto;
  }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
