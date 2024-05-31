// completar las variables para que el programa funcione

window.addEventListener('load', function() {
    //capturar HTML 
    let titulo = document.querySelector ('#titulo');
    titulo.addEventListener ('mouseover', function(){
        let nombre = prompt ('Como te llamas?'); 
        let saludo = document.querySelector ('#saludo');
        saludo.style.textTransform = 'uppercase'; 
        if (nombre === null) {
            saludo.innerText = 'Bienvenido'; 
        } else {
            saludo.innerText = 'Bienvenido ' + nombre;
        }
        titulo.style.display = 'none';
        let span = document.querySelector ('.bienvenida span');
        span.style.display = 'block';
        let personajes = document.querySelector ('.personajes');
        span.addEventListener ('click', function (){
            span.style.display = 'none';
            personajes.style.display = 'flex';
        })
        
        let bart = document.querySelector ('#bart');
        bart.addEventListener ('click', function (){
                if (document.querySelector('.personajes').classList.contains('.personaje-seleccionado')) {
                    document.querySelector('.personajes').classList.remove ('.personaje-seleccionado') 
                } else{
                    document.querySelector('.personajes').classList.add ('.personaje-seleccionado');
                }
        })

        let lisa = document.querySelector ('#lisa');
        lisa.addEventListener ('dblclick', function(){

        })

        let homero = document.querySelector ('#homero');
        homero.addEventListener ('click', function(){

        })

        let marge = document.querySelector ('#marge');
        marge.addEventListener ('mouseover', function (){

        })

        // let bart = document.querySelector ('#')
        // let bart = document.querySelector ('#')
        // let bart = document.querySelector ('#')
        // let bart = document.querySelector ('#')
        // let bart = document.querySelector ('#')
        // let bart = document.querySelector ('#')
        // let bart = document.querySelector ('#')
        // let bart = document.querySelector ('#')
        
    });
 
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
    // let boton = ;
 
 
 });
 
 