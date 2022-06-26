const input = document.querySelector('.input');

const output = document.querySelector('.output-res');

const usd = 67;


function result() {
  const res = input.value * usd
  const finishRes = res + resSwith(input.value)

  output.innerHTML = finishRes.toFixed()
}

function resSwith(value) {
  let a;
  if (value <= 1) {
    a = 40
  } else if (value > 1 && value <= 5) {
    a = 50
  } else if (value > 5 && value <= 10) {
    a = 70
  } else if (value > 10 && value <= 15) {
    a = 90
  } else if (value > 15 && value <= 20) {
    a = 110
  } else if (value > 20 && value <= 25) {
    a = 150
  } else if (value > 25) {
    a = 180
  }
  return a
}

input.oninput = result