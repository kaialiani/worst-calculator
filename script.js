const firstnumber = document.getElementById("firstnumber");
const secondnumber = document.getElementById("secondnumber");
const operator = document.getElementById("operator");
const calculate = document.getElementById("calculate");
const doround = document.getElementById("doround");
const decimals = document.getElementById("decimals");
const results = document.getElementById("results");
const clear = document.getElementById("clear");

calculate.addEventListener("click", function() {
  let result = 0;
  switch (operator.value) {
    case "add":
      result = parseFloat(firstnumber.value) + parseFloat(secondnumber.value);
      break;
    case "sub":
      result = parseFloat(firstnumber.value) - parseFloat(secondnumber.value);
      break;
    case "mul":
      result = parseFloat(firstnumber.value) * parseFloat(secondnumber.value);
      break;
    case "div":
      result = parseFloat(firstnumber.value) / parseFloat(secondnumber.value);
      break;
  }

  if (doround.checked) {
    result = result.toFixed(decimals.value);
  }

  const li = document.createElement("li");
  li.textContent = result;
  results.appendChild(li);
});

clear.addEventListener("click", function() {
  results.innerHTML = "<li>0</li><li>0</li><li>0</li><li>0</li>";
});
