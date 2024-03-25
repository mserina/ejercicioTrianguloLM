/**
 * TRIANGULO 
 */

function triangulo(){
	let numeroLineas = prompt("Inserte el numero de lineas");
	var icono = "";
	var filaEntera = "";
	
	if(numeroLineas >= 1){
		
		for (let i = 0; i < numeroLineas; i++){
		  
	 	icono += "*";
	 	filaEntera += icono + "<br>"
	 	
		}
		
		document.getElementById("hola").innerHTML= filaEntera;
	}
	
}
 