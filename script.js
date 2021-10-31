//responsive navbar
const toggleButton = document.querySelectorAll('.toggle-button')[0]
const navbarLinks = document.querySelectorAll('.navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


const navList = document.querySelectorAll('.nav-list');

navList.forEach((ul) => {
    ul.innerHTML = `
    <li class="nav-link" value="japan"><a href="/pages/japan.html">japan</a></li>
    <li class="nav-link" value="nyc"><a href="/pages/nyc.html">New York</a></li>
    <li class="nav-link" value="vegas"><a href="/pages/vegas.html">Las Vegas & Nevada</a></li>
    <li class="nav-link" value="nyc"><a href="/pages/california.html">california</a></li>
    <li class="nav-link" value="archive"><a href="/pages/archive.html">archive</a></li>

    <li class='nav-link'><a href="https://instagram.com/danny_l_photography" target="_blank" rel="noopener noreferrer">Instagram</a></li>
    <li class='nav-link'><a href="https://www.etsy.com/shop/DannyLPhotoandDesign" target="_blank" rel="noopener noreferrer">Shop</a></li>
    `
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    const value = link.getAttribute('value')
    console.log(value)
    const location = window.location.href
    if (location.includes(value)) {
        link.classList.add('underline')
    }
})

const modal = document.querySelector('.customModal');
let modalPhoto;

if (modal) {
    modalPhoto = document.querySelector('.modal-photo')
    
    let open = true;
    
    modal.addEventListener('click', () => {
        if (open) {
            modal.classList.remove('open')
        }
    })

    const pics = document.querySelectorAll('.img-thumb')

    pics.forEach((img) => {
        img.addEventListener('click', () => {
            modal.classList.add('open')
        })
    })
}

const openModal = () => {
        console.log(event.target.src)
        const imgUrl = event.target.src
        modalPhoto.src = imgUrl
}


const carousel = document.querySelector('.carousel-img');
const interior = document.querySelector('.home-images-interior');

const images = [];

// let num = 1;

setInterval(() => {
    // if (num === 15) { //amount of files in carousel folder
    //     num = 1
    // } else {
    //     num++
    // }
    const num = Math.floor(Math.random() * (16-1) + 1)
    // carousel.classList.remove('animate__fadeIn');
    // carousel.classList.add('animate__fadeIn');
    carousel.src = `assets/Carousel/carousel${num}.jpg`;
    // interior.innerHTML = `<img class="carousel-img animate__animated animate__fadeIn" src="${images[num]}">`
}, 4000)

