//PDO -Paradigma de programación orientada a objetos: //
//--Clases --// Es la plantilla con la que creo objetos

class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color=color;

        //Lo que entra como parametro lo combierte en propiedad de la clase "Animal"

        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    };

    verInfo(){
        document.getElementById("demo18.4").innerHTML = this.info + "<br>";
    } //La astrapci{on, reducir la clase a la minima expresión, es una forma de heredar.

    //POLIMORFISMO
    ladrar(){
        if(this.especie == 'perro') {
            document.getElementById("demo18.6").innerHTML="¡Guau, Guau!!!<br>"
        }else{
            document.getElementById("18.6").innerHTML="No puedo ladrar porque no soy un perro,, soy un "+this.especie + "<br>";
        }
    };
    
};

//let perro = new Animal();
// perro.especie = 'Perro';
//perro.edad = 5;

//console.log(perro);

let perro =new Animal("perro", 5, "rojo");

document.getElementById("demo18.0").innerHTML=perro.info;

console.log(perro);

let gato = new Animal("gato", 8, "blanco");
let elefante = new Animal("elefante", 35, "gris");
let loro = new Animal("loro", 1, "verde");

document.getElementById("demo18.1").innerHTML=gato.info;
document.getElementById("demo18.2").innerHTML=elefante.info;
document.getElementById("demo18.3").innerHTML=loro.info;

//Forma de llamar el metodo de una manera mas corta 
elefante.verInfo();
loro.verInfo();
perro.verInfo();
gato.verInfo();

gato.ladrar();
//perro.ladrar();

