document.addEventListener('click', (e) => {
    document.getElementById('cuadro').style.left = e.clientX + 'px'
    document.getElementById('cuadro').style.top = e.clientY + 'px'
})