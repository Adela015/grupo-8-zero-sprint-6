window.addEventListener('load', function(){

    console.log('probando Script')
    let form = document.querySelector('form.form-register')
    
    
    form.addEventListener('submit', function(e){

        let errores = [];



        let nombre = document.querySelector('input#nombre')

        if (nombre.value === '') {
            errores.push('¡Debes ingresar un nombre!')
        } else if (nombre.value.length < 3) {
            errores.push('El nombre debe tener al menos 2 caracteres ')
        }


        let apellido = document.querySelector('input#apellido')
        
        if (apellido.value === '') {
            errores.push('¡Debes ingresar un apellido!')
        } else if (nombre.value.length < 3) {
            errores.push('El apellido debe tener al menos 2 caracteres ')
        }


        let email = document.querySelector('input#email')
        if (email.value === '') {
            errores.push('¡Debes ingresar un email!')
        } 

        let password = document.querySelector('input#contraseña')
        if (password. value === ''){
            errores.push('¡Debes ingresar una contraseña!')
        } else if (password.value.length < 8){
            errores.push('La contraseña debe tener al menos 8 caracteres')
        }
        
        
        let avatar = document.querySelector('#avatar')
        

        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('div.errores-front ul')

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }
        }

    })
})