const c = document.getElementById('myContent')
const b = document.getElementById('btnLoad')
const l = document.getElementById('loading')

l.style.display = 'none'

b.addEventListener('click', evt => {
    l.style.display = 'block'
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'http://localhost:8080/Ajax/json.json', true)

    // Qué se debe hacer con la data?
    xhr.addEventListener('load', e => {

        switch (e.target.status) {
            case 200:
                const data = JSON.parse(e.target.responseText)
                draw(data)
                break
            case 401:
                c.textContent = 'NO ESTAS AUTORIZADO PARA REALIZAR ESTA ACCION'
                break
            case 404:
                c.textContent = 'NO existe informacion... paggina 404'
                break
            case 500:
                c.textContent = 'Hubo un error en el servidor'
                break

        }
               
         l.style.display = 'none'
    })
    //Realice la peticion
    xhr.send()


})

const draw = data => {
    c.innerHTML = ''
    const f = document.createDocumentFragment()

    data.forEach(n => {
        const container = document.createElement('div')
        const title = document.createElement('h2')
        const content = document.createElement('p')
        const datenew = document.createElement('span')

        title.textContent = n.rojo
        content.textContent = n.verde
        datenew.textContent = n.cyan

        container.appendChild(title)
        container.appendChild(content)
        container.appendChild(datenew)

        f.appendChild(container)
    });
    c.appendChild(f)
}