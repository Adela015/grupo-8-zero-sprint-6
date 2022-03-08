window.addEventListener('load', function(){
    
    console.log('funciona el script?')  // testeo que el script esté linkeado y funcionando correctamente en nuestra vista
    
    let form = document.querySelector('form') // capturo el formulario para generar el evento


    // creo el evento del formulario:
    form.addEventListener('submit', function(){

         // capturo los elementos que quiero validar

        let name = document.querySelector('input#name');
        let artist = document.querySelector('input#artist');
        let description = document.querySelector('input#description');
        let image = document.querySelector('input#image');
        let price = document.querySelector('input#price')
        // creo un array vacío para luego pushear los errores que puedan llegar a aparecer

        let errores = [];

        // condicional para validar el nombre y largo del producto

        if (name.value === ''){
            errores.push('¡Debes ingresar un nombre para el producto!')
        } else if (name.value.length < 5){
            errores.push('El nombre del producto debe tener al menos 5 caracteres')
        }

        // condicional para validar el nombre del artista o marca de

        if (artist.value === ''){
            errores.push('¡Debes ingresar un nombre de artista o marca!')
        } // en este caso no validamos la cantidad de caracteres ya que podría interferir con algunos productos ya que existen artistas con nombres muy cortos

        // condicional para validar la descripción

        if(description.value === ''){
            errores.push('¡Debes ingresar una descripción!')
        } else if (description.value.length < 20){
            errores.push('La descripción debe tener al menos 20 caracteres')
        }

        // condicional para validar precision

        if(price.value === ''){
            errores.push('¡El producto debe tener un precio!')
        }

        // condicional para ver si tenemos errores en nuestro array o no

        if (errores.length > 0){
            e.preventDefault(); // si hay errores, evitamos que el formulario envíe los datos

            // creamos una variable que contendrá el div donde se mostrarán los errores en la vista de

            let ulErrores = document.querySelector('div.errores-front ul')

            for (let i = 0; i < array.length; i++) { //recorremos el array y escribimos en la etiqueta de <ul> un <li> por cada error
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'               
            }
        }

    })




})