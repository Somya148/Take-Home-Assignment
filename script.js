// function hideTitle() {
//     var title = document.querySelector('.card .title');
//     title.classList.add('hide');
// }

// function showTitle() {
//     var title = document.querySelector('.card .title');
//     title.classList.remove('hide');
// }
function hideTitle(card) {
    var title = card.querySelector('.title');
    title.classList.add('hide');
}

function showTitle(card) {
    var title = card.querySelector('.title');
    title.classList.remove('hide');
}