// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let listadoDeAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let listaAmigos = [];
let nombreValidado = 0;
let nombreDeAmigo ="";
let amigoSorteado = "";
let cantidadAmigos = 0;



function agregarAmigo(){    
    //capturamos el nombre
    nombreDeAmigo = document.getElementById('amigo').value;
 
    nombreValidado = validarNombre(nombreDeAmigo,listaAmigos);
    if(nombreValidado == 1){
        
        listaAmigos.push(nombreDeAmigo);     
        listadoDeAmigos.innerHTML = listaAmigos;
        limpiarCaja();
        cantidadAmigos ++;
        console.log(`cantidad amigos: ${cantidadAmigos}`);
    }
    else{
        console.log('No podemos agregar el nombre');
    }
}

function validarNombre(nombre, listado){
    if(nombre ==""){
        alert('Por favor, ingresa un nombre válido');
        return 0;
    } else{   
        if(listado.includes(nombre)){
            alert('Nombre no válido, ya existe previamente');
            return 0;
        } 
        else {
            return 1;
        }        
    }

}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo(){
    let numeroGenerado =  Math.floor(Math.random()*cantidadAmigos)+1;
    console.log(`numero sorteado: ${numeroGenerado}`);
    console.log(listaAmigos);
    listadoDeAmigos.innerHTML = "";
    amigoSorteado = listaAmigos[numeroGenerado -1];
    console.log(amigoSorteado);
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}
