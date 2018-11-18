const c = document.getElementById('myContent')
const b = document.getElementById('btnLoad')

b.addEventListener('click', evt => {
    const xhr = new XMLHttpRequest()
    console.log(`Objeto creado : ${xhr.readyState}`)

    xhr.open('GET', 'http://localhost:8080/Ajax/data.html', true)
    console.log(`Objeto abierto : ${xhr.readyState}`)

    // Qué se debe hacer con la data?
    xhr.addEventListener('load', e => {
        console.log(e.target)
        // c.innerHTML = e.target.responseText
    console.log(`Objeto cargado : ${xhr.readyState}`)
        
    })
    //Realice la peticion
    xhr.send()
    console.log(`Accion solicitado: ${xhr.readyState}`)


})