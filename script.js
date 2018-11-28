const ajax = request => {
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(request.method, request.url, true)
        xhr.addEventListener('load', e => {
            resolve(e.target)
        })
        xhr.send()
    } )
}


const showMarvel = async () => {
    const hash = '00e02946f327fbee15d329d24e6c6a3a'
    const apiKey = '54e8dba6a3dde372103b682af0265855'
    const url = `https://gateway.marvel.com:443/v1/public/characters?name=thor&apikey=${apiKey}`

    const r = { method: 'GET', url: url}
    const response = await ajax(r)
    switch  (response.status) {
        case 200:
        console.log(JSON.parse(response.responseText))
            draw(JSON.parse(response.responseText).data.results)
            break
        case 400:
            setText('Error de cliente ' + response.status)
            break
        default:
            setText('Error desconocido ' + response.status)
    }


}

const draw = data => {
    const fragment = document.createDocumentFragment()
    data.forEach(comic => {
        const container = document.createElement('div')
        const title = document.createElement('h2')
        const image = document.createElement('img')
        
        title.textContent = comic.name
        image.src = `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`
        
        container.appendChild(title)
        container.appendChild(image)
        fragment.appendChild(container)

    })

    myContent.appendChild(fragment)
}

btn.addEventListener('click', () => {showMarvel()})
