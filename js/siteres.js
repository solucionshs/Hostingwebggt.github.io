function saludar(){
    //tipo-dato nombre <inicializar>
    //let para definir variables 
    // const para definir constantes
    const mes='enero'; 
    var name = document.getElementById("user-name").value;
    var elements= document.getElementsByClassName("first");
    for (let i =0; i< elements.length; i++){
        elements [i].stye.backgroundColor= "#ff1493";
    }
   
    
    alert('se encontraron' + elements.length + 'elementos');
}
function reiniciar(){
    var elements= document.getElementsByClassName("first");
    elements[0].style.backgroundColor ="red"; 
}
function showConfirm(){
    var texto;
    if(confirm("seleciona un boton")){
        texto = "Haz presionado Aceptar";
    }
    else{
        texto = "Haz cancelado la accion";
    }
    document.getElementById("demo").innerHTML = texto;
    function mostrarPrompt(){
        let texto;
        let persona = prompt("por favor ingresa tu nombre", "Usuario");
        if (persona ==null || persona == ""){
            texto= "usuario cancelo el comando";
             }
        else {
            texto= "hola" + persona + "como estas? ";
             }
             document.getElementById("demo").innerHtml = texto;
    }
}
    function getRoot(){
        var r =getComputedstyle (root);
        alert ( " el valor de --miColor " + r.getPropertyValue('--miColor'))

    }