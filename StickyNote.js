document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("button");
  const outputContainer = document.getElementById("output-container");

  function createStickyNote() {
    const titleInput = document.getElementById("text");
    const colorInput = document.getElementById("color");
    const contentInput = document.querySelector(".font-mono textarea");

    const title = titleInput.value;
    const color = colorInput.value;
    const content = contentInput.value;

    const noteDiv = document.createElement("div");
    noteDiv.classList.add(
      "note",
      "w-[350px]",
      "bg-white",
      "rounded-lg",
      "p-4",
      "shadow-md",
      "mb-[3rem]",
      "ml-[1.1rem]",
      "overflow-hidden"
    );
    noteDiv.style.backgroundColor = color;

    noteDiv.innerHTML = `
            <div>
                <h1 class="font-sans font-bold text-3xl text-black">${title}</h1>
                <textarea id='texting' cols="30" rows="10" class="w-[300px] resize-none mt-2 h-[200px] p-4 rounded-[15px] outline-none font-mono">${content}</textarea>
                <div class="flex">
                    <div class="">
                        <button><i class="fa fa-close"></i></button>
                    </div>
                    
                </div>
            </div>
        `;

    const deleteButton = noteDiv.querySelector("button");
    deleteButton.addEventListener("click", function () {
      noteDiv.remove();
    });

    outputContainer.appendChild(noteDiv);

    titleInput.value = "";
    contentInput.value = "";
  }

  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    createStickyNote();
  });
});
