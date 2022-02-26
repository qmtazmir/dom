// Event by id

document.getElementById("add-border").addEventListener("click", function () {
  const container = document.getElementById("friend-container");
  container.style.border = "8px solid green";
  container.style.borderRadius = "20px";
});

// Event by class {need for loop}

function addbackground() {
  const friends = document.getElementsByClassName("friend");
  for (const friend of friends) {
    friend.style.backgroundColor = "gray";
  }
};
