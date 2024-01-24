const cups = document.querySelectorAll(".cup");
const liters = document.getElementById("lit");
const percentage = document.getElementById("percentage");
const remain = document.getElementById("remain");

fillmain();
cups.forEach((el, i) =>
  el.addEventListener("click", () => {
    highlightCups(i);
  })
);

function highlightCups(i) {
  if (
    cups[i].classList.contains("full") &&
    !cups[i].nextElementSibling.classList.contains("full")
  ) {
    i--;
  }
  cups.forEach((cup, i2) => {
    if (i2 <= i) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  fillmain();
}

function fillmain() {
    const main = document.querySelectorAll(".cup.full").length;
    const totalCups = cups.length;

    if (main === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${main / totalCups * 330}px`;
        percentage.innerText = `${(main / totalCups * 100).toFixed(1)}%`;
    }

    if (main === totalCups) {
        remain.style.visibility = "hidden";
        remain.style.height = 0;
    } else {
        remain.style.visibility = "visible";
        liters.innerHTML = `${(2 - 2 * main / 10).toFixed(1)}L`;
    }
}

