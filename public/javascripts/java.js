const socket = io();

function elegirNombre() {
    var campoNombre = document.getElementById('campoNombre');
    socket.emit('nick',campoNombre.value)
}

function avatarSeleccionado(event) {
    
}