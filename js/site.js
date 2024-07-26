
var root=document.querySelector(':root');

function saludar()
{ 
    //tipo_dato Nombre <inicializar>;
    //let para definir variables
    //const para definir=3.1416
   const mes='Enero'+'Julio';
    var name=document.getElementById("user-name").value;
    var elements=document.getElementsByClassName("first");
    for (let i = 0; i< elements.length; i++){
    elements[i].style.backgroundColor="#B833FF";
    }
    alert('Hola '+ name);
}
function reiniciar()
{
    var elements = document.getElementsByClassName("first");
    for (let i = 0; i< elements.length; i++){
    elements[i].style.backgroundColor="red";
} 
}

function showConfirm()
{
    var texto;
    if(confirm("selecciona un boton")){
        texto="Haz presionado Aceptar";
    }
    else{
        texto="haz cancelado la acción";
    }
    document.getElementById("demo").innerHTML=texto;
}

function mostrarPrompt(){
    let texto;
    let persona=prompt("Por favor ingresa tu nombre ","Usuario");
    if(persona==null||persona=="")
        {
            texto="Usuario canceló el comando";
        }
    else{
        texto="Hola " + persona + " ¿cómo estas?";
    }
    document.getElementById("demo").innerHTML=texto;
}
function getRoot(){
    var r=getComputedStyle(root);
    alert("el valor de --mi Color " + r.getPropertyValue('--miColor'));

}

function cambiarValor(){
    root.style.setProperty('--miColor','blue');
}


function showImage(image){
   var newImage=document.createElement('img');
   newImage.src=image.src;  
   newImage.removeAttribute('onclick');
    var modal= document.getElementById('preview');
    modal.classList.toggle('showModal');
    modal.appendChild(newImage);
}

function closeModal() {
    var modal = document.getElementById('preview');
    modal.classList.remove('showModal');
  }

function toggleMenu() {
    var button = document.querySelector(".gg-menu-oreos");
    button.classList.toggle("gg-close");
  
    var menu = document.getElementsByClassName("js-menu");
    menu[0].classList.toggle("active");
  }
  
  function fixPhotoOnScroll() {
    var photo = document.getElementById("photo-profile");
    this.scrollY > 50 ? (photo.style.marginTop = "0") : (photo.style.marginTop = "-7rem");
  }
  
  window.addEventListener("scroll", fixPhotoOnScroll, false);

/*
function cerrar()
{
    //var newImage=document.createElement('img');
   //newImage.src=image.src;  
   newImage.removeAttribute('onclick');
    var modal= document.getElementById('preview');
    //modal.classList.toggle('showModal');
    //modal.appendChild(newImage);
    document.getElementById('showImage').style.display="none";//\2639
}

function toggleMenu() {
    var button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');
    var menu = document.getElementsByClassName('js-menu');
    menu[0].classList.toggle('active');
}

function fixPhotoOnScroll () {
    var photo = document.getElementById("photo-profile");
    this.scrolly > 50 ? photo.style.marginTop = 0 : photo.style.marginTop = '7rem'
}

window.addEventListener("scroll" , fixPhotoOnScroll , false);
*/
function showImage(image) {
    var newImage = document.createElement('img');
    newImage.src = image.src;
    newImage.removeAttribute('onclick');
    var modal = document.getElementById('preview');
    modal.classList.toggle('showModal');
    var existingImage = modal.querySelector('img');
    if (existingImage) {
      modal.removeChild(existingImage);
    }
    modal.appendChild(newImage);
  }
  
  function closeModal() {
    var modal = document.getElementById('preview');
    modal.classList.remove('showModal');
  }