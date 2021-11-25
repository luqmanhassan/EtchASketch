var x;
var y;
var block = document.createElement('div');
var element = document.getElementById('innerdiv');
var inner_element = element.getElementsByTagName('div');
var resize_button = document.getElementById('resize');
resize_button.addEventListener('change', inputchange);
// Resizing The Grid
function inputchange(ev) {
    deleteGrid();
    createGrid(ev.target.value);
}
function deleteGrid() {
    // Deleting The Grid
    var parent = document.getElementById('innerdiv');
    var child = parent.getElementsByTagName('div');
    while (inner_element.length != 0) {
        for (var _i = 0, child_1 = child; _i < child_1.length; _i++) {
            var i = child_1[_i];
            i.remove();
        }
        parent.style.gridTemplateColumns = '';
    }
}
function createGrid(squares) {
    // Creating The Grid
    for (y = 0; y < squares * squares; y++) {
        block = document.createElement('div');
        element = document.getElementById('innerdiv');
        element.appendChild(block);
    }
    var txt = '';
    for (var i = 0; i < squares; i++) {
        txt += ' auto';
    }
    document.getElementById('innerdiv').style.gridTemplateColumns = txt;
    //Coloring Effect
    for (var i = 0; i < inner_element.length; i++) {
        inner_element[i].addEventListener('mouseover', changetoblack);
        inner_element[i].addEventListener('mouseout', changetoblack);
    }
    function changetoblack() {
        this.style.backgroundColor = 'black';
    }
}
createGrid(50);
// Reset Button
function reset() {
    for (var i = 0; i < inner_element.length; i++) {
        inner_element[i].style.backgroundColor = 'white';
    }
}
