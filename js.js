window.onload=function(){
  const button = document.querySelector("input");
  const paragraph = document.querySelector("p");
  
  button.addEventListener("click", updateButton);
  
  function updateButton() {
    if (button.value === "Run") {
      button.value = "Stop";
      paragraph.textContent = "Hav run";
    } else {
      button.value = "Run";
      paragraph.textContent = "Hav stop";
    }
  }
}
