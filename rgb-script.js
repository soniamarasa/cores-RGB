window.addEventListener('load', start);
window.addEventListener('change', valueInput);

var campo1 = document.querySelector('#valuergb1');
var campo2 = document.querySelector('#valuergb2');
var campo3 = document.querySelector('#valuergb3');

function start() {
  campo1.value = 0;
  campo2.value = 0;
  campo3.value = 0;

  function rgb() {
    var r = campo1.value;
    var g = campo2.value;
    var b = campo3.value;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  
  document.querySelector('#corresultado').style.backgroundColor = rgb();
}

function valueInput(event) {
  if (event.target.id === 'rgb1') {
    campo1.value = event.target.value;
  } else if (event.target.id === 'rgb2') {
    campo2.value = event.target.value;
  } else {
    campo3.value = event.target.value;
  }

  function rgb() {
    var r = campo1.value;
    var g = campo2.value;
    var b = campo3.value;

    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  document.querySelector('#corresultado').style.backgroundColor = rgb();
}
