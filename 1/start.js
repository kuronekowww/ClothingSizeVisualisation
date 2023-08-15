const left = document.querySelector('.left')
const container = document.querySelector('.bmContainer')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

