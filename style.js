const result = document.getElementById('result');
const scoreBroad = document.getElementById('score');
const btnStart = document.getElementById('btn-start');
const btnClick = document.getElementById('btn-click');

let count = 0;

function start() {
    btnClick.removeAttribute('disabled');
    scoreBroad.textContent = 0;
    result.textContent = '';

}
function resetData() {
    count = 0;
    btnClick.setAttribute('disabled', 'true');
}

btnStart.addEventListener('click', () => {
    start();
    setTimeout(() => {
        if (count >= 10) {
            result.textContent = 'You Won!';
        } else {
            result.textContent = 'You Lost!';
        }
        resetData();
    }, 2000)


})

btnClick.addEventListener('click', () => {
    count++;
    scoreBroad.textContent = count;
})