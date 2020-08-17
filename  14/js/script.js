var table = document.getElementById('tableId'),
    button = document.getElementById('addRow');
button.addEventListener('click', function () {
    var newrow = table.insertRow(0);
    newrow.insertCell(-1).innerHTML;
    newrow.insertCell(-1).innerHTML;
    newrow.insertCell(-1).innerHTML;
    newrow.classList.add('table__tr')
});
table.onclick = function () {
    var target = event.target;
    if (target.tagName === 'TD' && !(target.classList.contains('addRow'))) {
        var input = target.innerHTML;
        target.innerHTML = '<input onblur = "ending(this)"/>';
        target.firstChild.value = input;
        target.firstChild.focus();
    }
};
function ending(evt) {
    var value = evt.value;
    evt.parentNode.innerHTML = value;
};


