const persona = {
    name: "Dorian",
    lastName: "Designs",
    age: 25,
    active: true
}

const myHeaders = new Headers()
myHeaders.append('ContentType', 'application/json')
myHeaders.append('Autorization', 'Bearerasdfasdf')

const  myConfig = {
    method: 'POST',
    headers: myHeaders,
    body: persona
}

fetch('/asdfadf', myConfig)
.then(response => response.json())
.then(response => draw(response.data))
