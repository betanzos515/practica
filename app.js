const nombreProducto = document.querySelector('.textNombre');
const precioProducto = document.getElementById('textPrecio');
const btnAgregar = document.querySelector('.btnAgregrar');

const listaProductos = document.querySelector('.lista');


let modificar = false;

const agregarElemento = () =>{

   /*  const producto = document.createElement('li');
    const nombreProducto = document.createElement('p');
    const nombrePrecio = document.createElement('p'); */
    const [ nombre, precio ] = obtenerValoresForm();
    /* nombreProducto.innerText = nombre;
    nombrePrecio.innerText = precio;
    producto.appendChild(nombreProducto);
    producto.appendChild(nombrePrecio);
    listaProductos.appendChild(producto); */
    const elemento = `<li><p>${nombre}</p><p>${precio}</p> <button class="btnEliminar">Eliminar</button><button class="btnEditar">Editar</button></li>`

    listaProductos.innerHTML += elemento
}


const obtenerValoresForm = ()=>{
    if(nombreProducto.value == '' || precioProducto.value == ''){
        console.log('No puede haber campos vacios');
        return;
    }
    const nombre = nombreProducto.value;
    const precio = precioProducto.value;

    return [ nombre, precio ];
}


btnAgregar.addEventListener('click',()=>{
    if(modificar == false){
        agregarElemento();
    }
    else{
        modificarElemento(nombre, precio);
    }
});


listaProductos.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btnEditar')){
        /* const nombre;
        const precio;  */
        const padre = e.target.parentElement.childNodes;

        const padreNodo = e.target.parentElement;

        const id = padreNodo.getAttribute('id');
        
        const nombre = padre[0];
        const precio = padre[1];
        console.log(nombre.innerText);
        console.log(precio.innerText);
        console.log(id);


    
    }
})

const modificarElemento = (nombre, precio) =>{
    /*
        buscar el elemento que quiers modificar,
        obtener sus valores y los vas a reemplazar
    */

    //elementoModificar.innerText = <Nuevo valor del texto>
}