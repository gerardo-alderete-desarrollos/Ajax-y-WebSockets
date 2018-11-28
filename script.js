const STATUS_OK = 200
const STATUS_CREATE = 201
const STATUS_NOT_FOUND = 404

const hash = '00e02946f327fbee15d329d24e6c6a3a'
const apiKey = '54e8dba6a3dde372103b682af0265855'
const url = `https://gateway.marvel.com:443/v1/public/characters?name=thor&apikey=${apiKey}`


// const draw = data => {
//     const fragment = document.createDocumentFragment()
//     data.forEach(comic => {
//         const container = document.createElement('div')
//         const title = document.createElement('h2')
//         const image = document.createElement('img')
        
//         title.textContent = comic.name
//         image.src = `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`
        
//         container.appendChild(title)
//         container.appendChild(image)
//         fragment.appendChild(container)

//     })

//     myContent.appendChild(fragment)
// }

btn.addEventListener('click', () => {
    loadComics()
})

const loadComics = async () => {
    const response = await axios.get(url)
    switch (response.status)  {
        case STATUS_OK:
            draw(response.data.data.results)
            break
        case STATUS_NOT_FOUND:
            console.log('No se encontro informacion')
            break
    }
    console.log(response)
}
