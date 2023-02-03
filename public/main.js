const socket = io()

socket.on('client-total', (data) => {
    console.log(data);
})