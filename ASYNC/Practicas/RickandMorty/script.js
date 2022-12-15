function getCharacters(done){

const results = fetch("https://rickandmortyapi.com/api/character");// con esto busco los datos de personajes en la api de rick and morty 
results
.then(response => response.json())
//para que se vea mejor ya que regresa una promesa con datos que hay que convertir en formato json.
.then(data => {
//llamo a mis datos
done(data) //llamo a mi callback para pasar mis datos
});

}


//Ahora llamo a mi funcion
//y llamo al callback ya que lo recibe y me da los datos


getCharacters(data =>{
   console.log(data);
   
});