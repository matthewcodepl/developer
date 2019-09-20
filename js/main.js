const nav = document.querySelector('#navigation');
const btn = document.querySelector('#burger');

const handleClick = () => {
    // console.log('clikc')
    nav.classList.toggle('navigation--active');
}

btn.addEventListener('click', handleClick)