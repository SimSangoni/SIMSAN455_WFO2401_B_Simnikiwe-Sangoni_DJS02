const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (isNaN(dividend) || isNaN(divider)){
    console.error("Non-numeric input detected.");
  } else {
    if (divider === "0"){
      result.innerText = "Division not performed. Invalid number provided. Try again.";
      console.error("Math Error! Division by zero attempted.");
    } else if (dividend === "" || divider === ""){
      result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    } else{
    const divisionResult = dividend / divider;
    result.innerText = Math.floor(divisionResult)
    }
  }
});