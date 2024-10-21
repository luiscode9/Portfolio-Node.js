/*----------------- RESPONSIVE MENUMOBILE ----------------*/

const openMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  const menuItems = nav.querySelectorAll("li");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("show-menu");
      toggle.classList.remove("show-icon");
    });
  });
};

openMenu("open-menu", "menu-mobile");

/*----------------- ACCORDION SECTION ----------------*/

document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".exp-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const content = this.nextElementSibling;

      if (content.classList.contains("open")) {
        content.classList.remove("open");
        this.querySelector(".exp-down-arrow").style.display = "block";
        this.querySelector(".exp-up-arrow").style.display = "none";
      } else {
        content.classList.add("open");
        this.querySelector(".exp-down-arrow").style.display = "none";
        this.querySelector(".exp-up-arrow").style.display = "block";
      }
    });
  });
});

/*----------------- HOVER VIDEO 1 AND 2 ----------------*/

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video1");
  const videoContainer = document.querySelector(".video-container1");

  videoContainer.addEventListener("mouseover", () => {
    video.play();
  });

  videoContainer.addEventListener("mouseout", () => {
    video.pause();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video2");
  const videoContainer = document.querySelector(".video-container2");

  videoContainer.addEventListener("mouseover", () => {
    video.play();
  });

  videoContainer.addEventListener("mouseout", () => {
    video.pause();
  });
});




