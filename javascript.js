const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownManue = document.querySelector('.dropdown_manue')
const learnMoreButtons = document.querySelectorAll(".learn-more");
const buttons = document.querySelectorAll(".learnmore");

AOS.init({
    duration: 1000, 
    once: false,    
  });

buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        event.preventDefault(); // stop page from opening link

        const parent = btn.closest(".layer");
        const info = parent.querySelector(".more-info");

        if (info.style.display === "none") {
            info.style.display = "block";
            btn.textContent = "show less";
        } else {
            info.style.display = "none";
            btn.textContent = "learn more";
        }
    });
});

  learnMoreButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const card = this.closest(".card"); // find the parent container
      const moreText = card.querySelector(".more-text");

      if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        this.textContent = "Show less";
      } else {
        moreText.style.display = "none";
        this.textContent = "Learn more";
      }
    });
  });

toggleBtn.onclick = function () {
    dropDownManue.classList.toggle('open')
    const isOpen = dropDownManue.classList.contains('open')

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}
let tablinks = document.getElementsByClassName("tablink");
let tabcontents = document.getElementsByClassName("tabcontent");

function opentab(tab) {
    for (tablink of tablinks) {
        tablink.classList.remove("actlink");

    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("activecontent");

    }
    event.currentTarget.classList.add("actlink");
    document.getElementById(tab).classList.add("activecontent");
}


