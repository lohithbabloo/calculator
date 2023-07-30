let string = "";
const input = document.getElementById("input");
const buttons = document.querySelectorAll(".row button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;
    if (value === "AC") {
      input.value = "";
      string = "";
    } else if (value === "=") {
      string = eval(string);
      input.value = string;
    } else if (value === "DE") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string = string + value;
      input.value = string;
    }
  });
});
