const textarea = document.querySelector("textarea");
const counter = document.getElementById("digit");
const max = 100;

textarea.addEventListener("input", () => {
  let remaining = max - textarea.value.length;
  if (remaining < 0) {
    textarea.value = textarea.value.substring(0, max);
    remaining = 0;
  }
  counter.textContent = `Character left: ${remaining}`;

  counter.style.color = remaining > 50 ? "green" : remaining > 20 ? "orange" : "red";
});
