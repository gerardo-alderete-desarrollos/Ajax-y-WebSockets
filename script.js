let ws = null

const setText = data => {
    const msg = `<div>${data}</div>`
    chat.insertAdjacentHTML('beforeend', msg)
}
btnConnect.addEventListener('click', e => {
    ws = new WebSocket('ws://demos.kaazing.com/echo')
    ws.onopen = () => setText('Conectado')
    ws.onclose = () => setText('Desconectado')
    ws.onerror = () => setText(e)
    ws.onmessage = () => {
        setText(e.data)
    }
})

btnDisconnect.addEventListener('click', e=> {
    ws.close()
})

btnSend.addEventListener('click', () => {
    ws.send(txtMsg.value)
})