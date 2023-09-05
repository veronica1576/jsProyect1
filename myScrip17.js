//mouse Over -Out

function moveOver(obj){
    obj.innerHTML = "Hola, muevete afuera";
    

};

function moveOut(obj){
    obj.innerHTML="Mouse Over me";

};

//mouse Down -Up
function mDown(obj){
    obj.style.backgroundColor = '#lec5e5';
    obj.innerHTML="Sueltame amigo";
};

function mUp(obj){
    obj.style.backgrounColor = 'rgb(26,88,12)';
    obj.innerHTML = "Gracias Humano";
};

//Escuchador de eventos, Botón Intentalo
document.getElementById('myBtn').addEventListener("click", ()=>{
    alert("Buena por intentar, por eso lo lograrás");
});

//Escuchador de eventos, narración de acción 

var accion = document.getElementById("otherBtn");

accion.addEventListener("mouseover", meCubres);
accion.addEventListener("click", mePresionas 
);
accion.addEventListener("mouseout", meLiberas);

//No es necesario colocar "()" parentesis de las functiones dentro de los metodos de js.

function meCubres(){
    document.getElementById("demo17.0").innerHTML+="Tu Mouse me cubre!! <br>";
};

function mePresionas(){
    document.getElementById("demo17.0").innerHTML+="Has dado Click y me presionas :( <br>";
};

function meLiberas(){
    document.getElementById("demo17.0").innerHTML+="Gracias Humano por liberarme :D <br>";
};