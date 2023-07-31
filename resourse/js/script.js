let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// ========================= sticky menu navbar ======================

let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

// active call with a header section

const nav = document.querySelectorAll(".navAc");
// console.log(nav)

nav.forEach((item) => {
  // console.log(item)
  item.addEventListener("click", function (e) {
    const current = document.getElementsByClassName("active");
    // console.log(current[0].className)
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
});