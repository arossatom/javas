function validaArray(arr, num) {
   try { if(!arr && !num) throw new ReferenceError("Envie os parametros");
   if (typeof arr !== 'object') 
   throw new TypeError('Array precisa ser do tipo object');
   if (typeof num !== 'number')
   throw new TypeError('Array precisa ser do tipo number');
   if (arr.length !==num) throw new RangeError('Tamanho inválido');
   return arr;
       
   } 
   catch (e) {
       if( e instanceof ReferenceError) {
           console.log("este erro é um referenceerror!")
           console.log(e.messege)
       } else if (e instanceof TypeError) {
           console.log("este erro é um typeerror!")
           console.log(e.message)
       }else if ("este é um erro rangeerror") {
           console.log("este é um erro rangeerror!")
           console.log(e.message)
       } else {
           console.log('tipo de erro nao esperado:' + e )
       }

   }
}

console.log(validaArray());
