const brands = document.querySelectorAll('.brand')


brands.forEach(brand => {
    brand.addEventListener('click', () => {
        removeActiveClasses()
        brand.classList.add('active')
    })
})

function removeActiveClasses() {
    brands.forEach(brand => {
        brand.classList.remove('active')
    })
}