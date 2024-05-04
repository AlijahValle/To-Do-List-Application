const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todoLists"),
  clearButton = document.querySelector(".clear-button");

inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();

  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
        </li>`;

    todoLists.insertAdjacentHTML("beforeend", liTag);
    inputField.value = "";
    allTasks();
  }
});

function handleStatus(e) {
  const checkbox = e.querySelector("input");
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks();
});
