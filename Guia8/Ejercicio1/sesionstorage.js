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
        sessionStorage.setItem(key, JSON.stringify(object[key]))
    }
}

function get_storage(){
    if(sessionStorage.length != 0){
        return {
            "nombre": sessionStorage.getItem('nombre'),
            "pais": sessionStorage.getItem('pais'),
            "biografia": sessionStorage.getItem('biografia')
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