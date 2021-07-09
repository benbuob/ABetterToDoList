//Grabbing all DOM elements needed and assiging to variables
const btn = document.querySelector("#btn");
const listsContainer = document.querySelector("#lists-container");
const input = document.querySelector("#info");

const highList = document.querySelector("#red");
const mediumList = document.querySelector("#yellow");
const lowList = document.querySelector("#green");

//Taking in the input and deciding which list to add item to
const addTask = function (event) {
  event.preventDefault();
  const hi = document.querySelector("#high-radio");
  const med = document.querySelector("#medium-radio");
  const lo = document.querySelector("#low-radio");
  const newTask = input.value;
  let val = "";
  if (hi.checked === true) {
    val = "high";
  } else if (med.checked === true) {
    val = "med";
  } else if (lo.checked === true) {
    val = "low";
  } else alert("please select a priority level");
  pushTask(newTask, val);
};

//Pushing new task item to the correct list based on priority selected
const pushTask = function (newTask, val) {
  const ele = `<li class='list-item'>${newTask}<a class='delete-task'>Remove</a></li>`;
  if (val === "high") {
    highList.insertAdjacentHTML("afterbegin", ele);
  } else if (val === "med") {
    mediumList.insertAdjacentHTML("afterbegin", ele);
  } else if (val === "low") {
    lowList.insertAdjacentHTML("afterbegin", ele);
  }
  input.value = "";
  val.checked = false;
};

btn.addEventListener("click", addTask);

//REMOVE Task. in this case the parent element of the a tag is the li tag, and so the whole list item will be removed
listsContainer.addEventListener("click", removeBook);
function removeBook(event) {
  if (event.target.classList.contains("delete-task")) {
    event.target.parentElement.remove();
    console.log("working");
  }
}
