const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeTextSize = (e) => {
    text.style.fontSize = `${e.currentTarget.value}px`;
}

range.addEventListener('input', changeTextSize)