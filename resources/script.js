document.getElementById('button').addEventListener('click', changeColour);

function changeColour() {
  let col1 = Math.floor(Math.random() * 256);
  let col2 = Math.floor(Math.random() * 256);
  let col3 = Math.floor(Math.random() * 256);
  let rgbValue = `rgb(${col1},${col2},${col3})`;
  document.getElementById('button').style.backgroundColor = rgbValue;
  document.getElementById('text-box').style.borderWidth = 'thick';
  document.getElementById('text-box').style.borderStyle = 'solid';
  document.getElementById('text-box').style.borderColor = rgbValue;
  document.getElementById('text-box').innerHTML = `your colour is rgb(${col1},${col2},${col3})`;
}
