let x: number;
let y: number;
let block = document.createElement('div');
let element = document.getElementById('innerdiv');
let inner_element = element.getElementsByTagName('div');
let resize_button = document.getElementById('resize');
resize_button.addEventListener('change', inputchange);

// Resizing The Grid
function inputchange(ev) {
  deleteGrid();
  createGrid(ev.target.value);
}

function deleteGrid(): void {
  // Deleting The Grid
  var parent = document.getElementById('innerdiv');
  var child = parent.getElementsByTagName('div');
  while (inner_element.length != 0) {
    for (let i of child) {
      i.remove();
    }

    parent.style.gridTemplateColumns = '';
  }
}

function createGrid(squares: number): void {
  // Creating The Grid
  for (y = 0; y < squares * squares; y++) {
    block = document.createElement('div');
    element = document.getElementById('innerdiv');
    element.appendChild(block);
  }

  let txt = '';
  for (let i = 0; i < squares; i++) {
    txt += ' auto';
  }
  document.getElementById('innerdiv').style.gridTemplateColumns = txt;

  //Coloring Effect
  for (let i = 0; i < inner_element.length; i++) {
    inner_element[i].addEventListener('mouseover', changetoblack);
    inner_element[i].addEventListener('mouseout', changetoblack);
  }

  function changetoblack(): void {
    this.style.backgroundColor = 'black';
  }
}

createGrid(50);

// Reset Button
function reset(): void {
  for (let i = 0; i < inner_element.length; i++) {
    inner_element[i].style.backgroundColor = 'white';
  }
}
