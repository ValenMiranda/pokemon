function Pokemon(nombre,color,poderDeAtaque,imagen){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = 0;
	this.vida = 150;
	this.poderDeAtaque = poderDeAtaque;
	this.imagen = imagen;

	this.mostrarPokemon = function(){
		return("Hola, soy " + this.nombre + " y soy de color " + this.color);
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}

const Pikachu = new Pokemon("Pikachu","amarillo",112);
const Charmander = new Pokemon("Charmander","anaranjado",115);
const Squirtle = new Pokemon("Squirtle","azul",94);
const Bulbasaur = new Pokemon("Bulbasaur","verde",118);

function pelear(){
	var seleccion1 = document.getElementById("select1").value; 
	var seleccion2 = document.getElementById("select2").value;

	if(seleccion1 == seleccion2){
			alert("¡Error! El Pokémon no se debe atacar a si mismo");
		return;
	}

	var jugador1 = new Pokemon(seleccion1,"Rojo",110);
	var jugador2 = new Pokemon(seleccion2,"Azul",100);
	jugador1.atacar(jugador2);	

	document.getElementById("resultado").innerHTML += (jugador1.nombre + " atacó a " + jugador2.nombre + " y " + jugador2.nombre + " tiene una vida de " + jugador2.vida + "<br>")
	
}






	/*for(var i = 0; i < seleccion1.length; i++){
		if(seleccion1[i].value === seleccion2[i].value){
			return alert("El Pokémon no se debe atacar a si mismo");
		}else{	
			resultado.innerHTML(seleccion1[i] + "atacó a " + seleccion2[i] + "y" + seleccion2[i] + "tiene una vida de " + jugador2.vida);
		}
	}
}*/