const bodies = document.querySelectorAll('.bodyImg')


bodies.forEach(body => {
    body.addEventListener('click', () => {
        body.classList.add('active')
    })
})
