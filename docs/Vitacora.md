# Sesion 1
Expliación de react.
Instalación de dependencias.

Crear un proyecto:
```
npx create-react-app <nombre del proyecto>
```

# Sesion 2
Para crear componentes debemos crear archivos con terminacion ".jsx" para que tengan las propiedades de react.

Creamos las carpetas: componentes, dentro de componentes creamos la carpeta pure y containers (pure para componentes puros y containers para componentes con propiedades).

Los componentes pueden ser basados en clases o en funciones.
Creamos el archivo GreetingClass.jsx dentro de componentes para ver un componente en forma de clase.

Si tenemos las herramientas de react para visual studio code podremos usar los snippets rccp para crear un cascaron de componente de tipo clase que recibe props dentro de GreetingClass.jsx

Al hacer esto obtendremos algo parecido a esto:

```
// GreetingClass.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GreetingClass extends Component {
    render() {
        return (
            <div>               
            </div>
        );
    }
}
GreetingClass.propTypes = {

};
export default GreetingClass;
```

React se importa al inicio para dejar en claro que ese archivo es un archivo js de tipo react.

La clase extiende de Component y utiliza la funcion render la cual retorna un elemento html, solo se puede retornar un solo elemento (<div></div>). Esto quiere decir que todo lo que necesitemos renderice nuestro componente debe estar dentro de esta etiquta div.

Para mostrar nuestro componente debemos colocarlo en App.js. Importarlo y colocarlo con sus respectivas etiquetas:
```
// App.js

import logo from './logo.svg';
import './App.css';
import GreetingClass from './components/pures/GreetingClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GreetingClass></GreetingClass>
      </header>
    </div>
  );
}
export default App;
```

Creamos un constructor para nuestra clase:
```
constructor(props) {
    super(props);
    this.state = {
        age: 25,
    };
}
```

Con este constructor indicamos que recibe props las cuales inyectamos en el constructor de la clase padre con el metodo super().
Despues de eso indicamos que tendremos un estado el cual sera un objeto que contendra los atributos a los cuales tendra acceso nuestra función render al igual que aquello que recibamos por medio de las props:
```
render() {
    return (
      <div>
        <h1>Hola {this.props.name}</h1>
        <h2>Tu edad es de {this.state.age}</h2>
      </div>
    );
  }
```

Podemos indicar por medio de las propTypes el tipo de dato que vamos a recibir y asi asegurarnos que recibamos el dato correcto:
```
GreetingClass.propTypes = {
  name: PropTypes.string,
};
```

El estado del componente es inmutable por lo que si deseamos modificarlo y que se vea reflejado en la vista debemos usar la funcion setState y pasarle el estado previo junto a un callback que actualice el estado, por ejemplo una funcion que se utilizara por medio del evento click:
```
birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
```

Las funciones deben estar declaradas como funciones flecha asi tendran acceso a los metodos y atributos de la clase por medio del prefijo "this."

Con esto podremos enlazar la funcion "birthday" a un boton en la vista:
```
<button onClick={this.birthday}>Aumentar</button>
```

Ahora que si deseamos usar componentes funcionales podemos usar el snippet "rfcp" el cual nos general la siguiente estructura:
```
// GreetingFunctional.jsx

import React from 'react';
import PropTypes from 'prop-types';

const GreetingFunctional = () => {
    return (<div></div>);
};

GreetingFunctional.propTypes = {};
export default GreetingFunctional;
```
El ejmplo completo como componente funcional sera:
```
// GreetingFunctional.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingFunctional = (props) => {
  const [age, setAge] = useState(25);
  const birthday = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <h1>Hola {props.name}</h1>
      <h2>Tu edad es de {age}</h2>
      <button onClick={birthday}>Aumentar funcion</button>
    </div>
  );
};

GreetingFunctional.propTypes = {
  name: PropTypes.string,
};
export default GreetingFunctional;
```
Para hacer lo mismo en un componente funcional sera que ahora usaremos un hook llamado useState, este lo importamos desde "react":
```
import React, { useState } from "react";
```

Este hook nos servira para poder crear un estado y una funcion que pueda editar dicho estado, asi como un estado inicial.

Las props las colocaremos como parametros de nuestra función y los metodos que delcaremos ahora deberan ser constantes de tipo funcion flecha.

La funcion que declaremos en useState para modificar dicho estado tendra acceso al estado inicial para modificarlo.

Como es una funcion solo debemos acceder a sus parametros y atributos sin el prefijo "this."

Todo lo demas se conserva igual.

# Sesion 3


