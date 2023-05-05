'use strict';

//Uso de bloques try catch.

/* En catch normalmente se específica el error
a atrapar y se hace algo si ese error llega a darse */
try{
    hello();
} catch (error){
    console.log(error);
}

//Error opcional

/* No es necesario especificar el error 
que se debe atrapar y simplemente se manda un mensaje personalizado
a consola. */
try{
    func();
}catch{
    console.log('Error gei')
}