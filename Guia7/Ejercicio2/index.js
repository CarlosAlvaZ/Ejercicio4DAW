const inUsuario = document.querySelector('#usuario')
const inCorreo = document.querySelector('#correo')
const inMensaje = document.querySelector('#mensaje')
const boton = document.querySelector('#enviar')
const alert = document.querySelector('.alert')
const success = document.querySelector('.success')
const reject = document.querySelector('.reject')
const usuarioRegex = /[a-z]+/ 
const correoRegex = /[A-Za-z0-9._-]+@[A-Za-z]+\.com/
const mensajeRegex = /[A-Za-z0-9_-\W]+/


inUsuario.addEventListener('input', (e)=>{
    let aux = e.target.value
    let is_correct = usuarioRegex.test(aux)
    console.log(is_correct)
    if(is_correct){
        e.target.classList.remove("error")
    } else {
        e.target.classList.add("error")
    }
})

inCorreo.addEventListener('input', (e)=>{
    let aux = e.target.value
    let is_correct = correoRegex.test(aux)
    if(is_correct){
        e.target.classList.remove("error")
    } else {
        e.target.classList.add("error")
    }
})

inMensaje.addEventListener('input', (e)=>{
    let aux = e.target.value
    let is_correct = mensajeRegex.test(aux)
    if(is_correct){
        e.target.classList.remove("error")
    } else {
        e.target.classList.add("error")
    }
})

boton.addEventListener('click', (e)=>{
    alert.classList.toggle('hidden')
    if(!usuarioRegex.test(inUsuario.value)){
        console.log(1)
        reject.classList.remove('hidden')
        success.classList.add('hidden')
        return
    }
    if(!correoRegex.test(inCorreo.value)){
        console.log(2)
        reject.classList.remove('hidden')
        success.classList.add('hidden')
        return
    }
    if(!mensajeRegex.test(inMensaje.value)){
        console.log(3)
        reject.classList.remove('hidden')
        success.classList.add('hidden')
        return
    }
    console.log(4)
    reject.classList.add('hidden')
    success.classList.remove('hidden')
})

alert.addEventListener('click', (e)=>{
    alert.classList.toggle('hidden')
})