document.addEventListener("DOMContentLoaded", function () {
    const acc = document.querySelectorAll(".accordion");
  
    acc.forEach(function (item) {
      item.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    });
  });
  