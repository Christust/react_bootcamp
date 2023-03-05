# Componentes
Los componentes en React pueden ser funcionales o basados en clases. Los componentes actualmente se estan dirigiendo a ser funcionales.
Para crear componentes debemos crear archivos con terminación ".jsx".

## Componentes basados en Clases
Los componentes de tipo clase como su nombre lo indica son componentes que retornan una clase la cual implementa el metodo render el cual heredan de la clase Component. Estos componentes pueden tener; al igual que cualquier clase, su constructor, sus metodos y atributos.

Estos componentes deben declarar su estado privado en el constructor y recibir las props desde ahi para sucesivamente inyectarlas en el metodo super de la clase Component.

## Componentes basados en Funciones
Los componentes de tipo función son componentes que estan basados en funciones normales o funciones de tipo flecha y al final de cada componente exportan dicha funcion o constante. Su estado privado debe ser modificado usando setState y pasandole el estado previo asi como el nuevo estado.

Esta metodologia es a donde se esta dirigiendo React actualmente. Los componentes de tipo funcion pueden tener sus constantes, su estado privado y sus funciones al igual que los componentes de tipo clase. La unica diferencia es que las funciones deben ser declaradas como constantes las cuales deben ser de tipo funciones flecha y que su estado debe ser actualizado por medio del hook useState.

# Estructuras de control
## Renderizado condicional
Para el renderizado condicional usaremos operadores ternarios embebiendo javascript usando las llaves:
```
{ condicion ? (if) : (else) }
```

React tambien maneja una sintaxis especial para los operadores ternarios la cual puede ser:
```
{condition && data returned}
```
## Renderizado en bucle

# Hooks
Los hooks son metodos ya definidos que nos ayudan a realizar tareas repetitivas o comunes en cada componente React. Van desde ayudarnos a modificar el estado el cual es inmutable a no ser que se use un hook,  hasta poder realizar tareas en determinados puntos del ciclo de vida de nuestro componente.

## useState
Este hook es usado para declarar un estado privado, una función para editar ese estado y un valor inicial a ese estado. Su estructura es:
```
const [<nombre de la variable>, setVariable] = useState(<valor inicial>);
```

## useRef
Este hook nos ayudara a poder obtener la data de una etiqueta HTML agregando la key con la referencia que hayamos creado:
```
// Ejemplo4.jsx
...

const miRef = useRef();

...
<h4 ref={miRef}>Ejemplo de elemento referenciado</h4>

...
```

## useEffect
Este hook tiene varios caso de uso, en esencia ejecutara un snippet de codigo bajo determinadas condiciones.

Caso 1 se ejecuta cada que el componente reciba un cambio:
```
useEffect(() => {
    <Codigo a ejecutar>
});
```

Caso 2 se ejecuta cuando las variables del estado que incluyamos en su array (segundo parametro el cual es opcional) se vean modificadas:
```
...

const [contador1, setContador1] = useState(0);
const [contador2, setContador2] = useState(0);

...

useEffect(() => {
    <Codigo a ejecutar>
}, [contador1, contador2]);

...
```

## useContext
Este hook nos ayuda a pasarle un contexto (un estado del padre) a los hijos y asi los hijos puedan acceder a el y los cambios que haya en el padre, tambien los manifestaran los hijos:
```
...

const miContexto = React.createContext(null);

const Ejemplo3 = () => {
  const estadoInicial = {
    token: "123",
    sesion: 1,
  };

  // Creamos el estado de este componente
  const [sesionData, setSesionData] = useState(estadoInicial);
  function actualizarSesion() {
    setSesionData({
      token: "123412341234",
      sesion: sesionData.sesion + 1,
    });
  }
  return (
    <miContexto.Provider value={sesionData}>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar sessiona</button>
    </miContexto.Provider>
  );
};
...
```

# Ciclos de vida
Son metodos o funciones que se ejecutan en forma automatica en puntos especificos de la vida del componente.
## Componentes basados en clases
Metodos de ciclo de vida de los componentes basados en clases:
### componentDidMount
### componentDidUpdate
### componentWillUnmount

## Componentes basados en funciones
En los componentes basados en funciones usamos hooks, mas precisamente el hook useEffect el cual puede englobar los tres metodos de clase anteriores.

Las equivalencias estaran adelante en forma de useEffect.

### componentDidMount
Usaremos el useEffect sin return y pasandole un array vacio, lo cual hara que ejecute las acciones una vez como minimo y solo ahi. Cada que se renderice el componente hara su snippet de codigo solo una vez.
```
useEffect(() => {
    <Acciones>
    );
  }, []);
```

### componentDidUpdate
```
useEffect(() => {
    <Acciones>
    );
  });
```

### componentWillUnmount
```
useEffect(() => {
  return () => {
    console.log("Comportamiento cuando el componente va a desaparecer");
  };
}, []);
```

