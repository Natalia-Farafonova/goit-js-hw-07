// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>



const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeTextSize = (e) => {
    text.style.fontSize = `${e.currentTarget.value}px`;
}

range.addEventListener('input', changeTextSize)