let input = document.getElementById("inputField");
let addBtn = document.getElementById("addToDo");
let text = document.getElementById("text");

addBtn.addEventListener("click", function () {
  let newEle = document.createElement("li");
  newEle.style.listStyleType = 'none'
  newEle.innerHTML = `${input.value} <span class="material-symbols-outlined" width=100>delete</span>`;
  text.append(newEle);
  input.value = "";
  newEle.querySelector('span').addEventListener('click', function() {
    newEle.remove()
  })
});

