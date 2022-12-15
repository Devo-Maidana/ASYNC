let padre = docuemnt.getElementById("padre");
let hijo1 = docuemnt.getElementById("hijo1");
let hijo2 = docuemnt.getElementById("hijo2");
let btn = docuemnt.getElementById("btn");

let count = padre.children.length;//COUNT A TODOS LOS ELEMENTOS PADRES 

console.log(count);

btn.addEventListener("click",mostrar);

function mostrar (event){
    console.log(event)
}