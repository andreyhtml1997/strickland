function dropdown() {

  const selectedAll = document.querySelectorAll(".dropdown");

  selectedAll.forEach((selected) => {
    const optionsContainer = selected.children[2];
    const optionsList = selected.querySelectorAll("li");

    selected.addEventListener("click", () => {

      if (selected.classList.contains("active")) {
        handleDropdown(selected, false);
      } else {
        let currentActive = document.querySelector(".dropdown.active");

        if (currentActive) {
          handleDropdown(currentActive, false);
        }
        handleDropdown(selected, true);
      }
    });

    // update the display of the dropdown
    for (let o of optionsList) {
      o.addEventListener("click", () => {
        if(o.childElementCount) {
          selected.querySelector(".dropdown__title").textContent = o.children[0].textContent;
        } else {
          selected.querySelector(".dropdown__title").textContent = o.textContent;
        }
      });
    }
  });

  // check if anything else ofther than the dropdown is clicked
  window.addEventListener("click", function (e) {
    if (e.target.closest(".dropdown") === null) {
      closeAllDropdowns();
    }
  });

  // close all the dropdowns
  function closeAllDropdowns() {
    const selectedAll = document.querySelectorAll(".dropdown");
    selectedAll.forEach((selected) => {
      const optionsContainer = selected.children[2];

      handleDropdown(selected, false);
    });
  }

  // open all the dropdowns
  function handleDropdown(dropdown, open) {
    if (open) {
      dropdown.classList.add("active");
    } else {
      dropdown.classList.remove("active");
    }
  }
}


dropdown();