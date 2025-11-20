// a function to check the number
function check() {
  let num = Number(prompt("Enter a Number: "));
  while (true) {
    if (Number.isNaN(num)) {
      num = Number(prompt('Enter a "Valid" Number: '));
      continue;
    } else {
      return num;
    }
  }
}

const a = check();

const arr = ["+", "-", "/", "*"];
let s = prompt("Enter an operation: '+' or '-' or '*' or '/' ");
while (!arr.includes(s)) {
  s = prompt(
    "Enter a 'Valid Opteration' these are the only choice: '+' or '-' or '*' or '/' "
  );
}

const b = check();

switch (s) {
  case "+":
    alert(a + b);
    console.log(a + b);
    break;
  case "-":
    alert(a - b);
    console.log(a - b);
    break;
  case "/":
    alert(a / b);
    console.log(a / b);
    break;
  case "*":
    alert(a * b);
    console.log(a * b);
    break;
}
