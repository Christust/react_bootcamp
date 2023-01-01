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
## Renderizado en bucle

# Hooks
Los hooks son metodos ya definidos que nos ayudan a realizar tareas repetitivas o comunes en cada componente React. Van desde ayudarnos a modificar el estado el cual es inmutable a no ser que se use un hook,  hasta poder realizar tareas en determinados puntos del ciclo de vida de nuestro componente.

## useState

