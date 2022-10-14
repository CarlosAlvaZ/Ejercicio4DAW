const inNombre = document.querySelector('#nombre')
const inPais = document.querySelector('#pais')
const inBiografia = document.querySelector('#biografia')
const enviar = document.querySelector('#enviar')


// Entrada esperada
// {
    //     "nombre": "XXXX",
    //     "pais": "XXXX",
    //     "biografia": "XXXX"
    // })
function set_storage(object){
    for(key in object){
        localStorage.setItem(key, JSON.stringify(object[key]))
    }
}

function get_storage(){
    if(localStorage.length != 0){
        return {
            "nombre": localStorage.getItem('nombre'),
            "pais": localStorage.getItem('pais'),
            "biografia": localStorage.getItem('biografia')
        }
    }
    return false
}

function obtain_data(){
    return {
        "nombre": inNombre.value,
        "pais": inPais.selectedIndex,
        "biografia": inBiografia.value
    }
}

window.addEventListener('load', (e)=>{
    let storage = get_storage()
    if(!storage){
        return
    }
    inNombre.value = JSON.parse(storage.nombre)
    inPais.selectedIndex = storage.pais
    inBiografia.value = JSON.parse(storage.biografia)
})

enviar.addEventListener('click', (e)=>{
    let toStore = {
        "nombre": inNombre.value,
        "pais": inPais.selectedIndex,
        "biografia": inBiografia.value
    }
    set_storage(toStore)
})

setInterval(()=>{
    let toStore = {
        "nombre": inNombre.value,
        "pais": inPais.selectedIndex,
        "biografia": inBiografia.value
    }
    set_storage(toStore)
}, 5000)