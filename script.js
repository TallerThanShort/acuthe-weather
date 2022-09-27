//imports
let alertwrap = select("#modal-alerter");

//some demo shid
console.warn('no data to fetch');
alertwrap.style.display = `block`;

function okAlert() {
    alertwrap.style.display = `none`;
}

//simple function to write this shid faster
function select(el) {
    return document.querySelector(el);
}

//FDOM activate
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
});
