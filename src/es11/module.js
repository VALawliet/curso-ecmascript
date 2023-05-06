'use strict'

/* Usando la palabra reservada export para darle a entender a javascript que esto
será usado como un modulo dinámico.

La importancia de los modulos dinámicos es que nos permiten llenar la página web solo con los elementos
esenciales para su correcto funcionamiento y, cuando sea necesario, mandar a llamar al código dentro
de los modulos para no saturar la conexión del usuario. La interación de los modulos se puede ver de una forma
más clara desde las devTools del navegador web yendo al apartado de 'resources'*/
export function hello(){
    console.log('uwu')
}