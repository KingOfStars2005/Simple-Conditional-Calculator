// a function to check the number
function check() {
  let num = Number(prompt("Enter a Number: "));
  while (true) {
    if(Number.isNaN(num)){
        num = Number(prompt("Enter a \"Valid\" Number: "));
        continue
    }
    else{
        return num
    }
  }
}
