
    function addTask() {
      const input = document.getElementById("taskInput");
      const text = input.value.trim();
      if (text === "") return;

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = text;
      span.onclick = () => span.classList.toggle("done");

      const btn = document.createElement("button");
      btn.textContent = "Delete";
      btn.onclick = () => li.remove();

      li.appendChild(span);
      li.appendChild(btn);

      document.getElementById("taskList").appendChild(li);

      input.value = "";
    }
    