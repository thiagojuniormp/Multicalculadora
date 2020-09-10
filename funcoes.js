 function mostrarTipo(){
    if(document.getElementById("radioIMC").checked){
		document.getElementById("divIMC").style = "display: block;";
		document.getElementById("divRet").style = "display: none;";
		document.getElementById("divCirc").style = "display: none;";	
	}
	if (document.getElementById("radioRet").checked){
		document.getElementById("divIMC").style = "display: none;";
		document.getElementById("divRet").style = "display: block;";
		document.getElementById("divCirc").style = "display: none;";	
	}
	if(document.getElementById("radioCirc").checked){
		document.getElementById("divIMC").style = "display: none;";
		document.getElementById("divRet").style = "display: none;";
		document.getElementById("divCirc").style = "display: block;";	
	}
 }
 
 function calcularIMC(){
	    var peso = document.getElementById("pesoIMC").value;
		var altura = document.getElementById("alturaIMC").value;
		if(peso !="" && altura !=""){
			var imc = peso / ((altura / 100) * (altura / 100));
			alert("O IMC é " + imc.toFixed(2));
		} else {
			alert("Digite dois valores");
	}
 }
	
 function calcularRet(){
	    var base = document.getElementById("baseRet").value;
		var altura = document.getElementById("alturaRet").value;
		if(base !="" && altura !=""){
			var areaRet = base * altura;
			alert("A área do retângulo é " + areaRet.toFixed(2));
		} else {
			alert("Digite dois valores");
		}
  }
  
 function calcularCirc(){
	    var raio = document.getElementById("raioCirc").value;
		if(raio !=""){
			var areaCirc = 3.14 * (raio * raio);
			alert("A área do círculo é " + areaCirc.toFixed(2));
		} else {
			alert("Digite o valor");
		}
 }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
