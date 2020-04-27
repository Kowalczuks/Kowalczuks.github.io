// Obtener los elementos de la clase . close

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){
     //Agregar un evento click a cada uno de ellos
     link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');
   
      //Quitarle las clases de animacion que ya tiene
        content.classList.remove("pulse");
        content.classList.remove("animated");
  
      //Agregar clases para animar su salida
        content.classList.add("fadeOutUp");
        content.classList.add("animated");
  
        setTimeout(function(){
          location.href = "/boletines";
        },600);
  
  
        return false;
  
      });
});