/**
 * 
 */

 var txt ="El valor absoluto de X es Y";
 
 var numUsuario = prompt("escriba un numero");
 
 
 var numUsuario1 = Number(numUsuario)
 var numUsuario2 = numUsuario1
 
 if(numUsuario1>=-1){
	 //numUsuario2 = numUsuario1 * - 1
	 document.writeln("El valor absoluto de "+ numUsuario1 + " es " + numUsuario2)
 }
 else{
	 numUsuario2 = numUsuario1 * - 1
	 document.writeln("El valor absoluto de "+ numUsuario1 + " es " + numUsuario2)
 }
 