const STATUS_OK = 200
const STATUS_CREATE = 201
const STATUS_NOT_FOUND = 404

const hash = '00e02946f327fbee15d329d24e6c6a3a'
const apiKey = '54e8dba6a3dde372103b682af0265855'
const url = `https://gateway.marvel.com:443/v1/public/characters?name=thor&apikey=${apiKey}`


const draw = data => {
    const container = document.createElement('div')

    data.forEach(comic => {
       const comicHTML =
            `<div>
                <h2>${comic.name}</h2>
                <img src="${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}">
            </div>`
        
        container.insertAdjacentHTML('beforeend', comicHTML)

    })

    myContent.appendChild(container)
}

btn.addEventListener('click', () => {
    loadComics()
})

const loadComics =  () => {
    fetch(url)
    .then(response => {
        switch (response.status)  {
            case STATUS_OK:
                return response.json()
            case STATUS_NOT_FOUND:
                console.log('No se encontro informacion')
                break
        }
        
    })
    .then(response => {
        draw(response.data.results)
    })
    .catch(error =>{
        console.log(error)
    })

}
