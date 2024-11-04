/*----------------- RESPONSIVE MENUMOBILE ----------------*/

const openMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  const menuItems = nav.querySelectorAll("li");
  const body = document.body;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");

    if (nav.classList.contains("show-menu")) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("show-menu");
      toggle.classList.remove("show-icon");
      body.classList.remove("no-scroll");
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
    videoContainer.classList.add("paused");
  });

  videoContainer.addEventListener("mouseout", () => {
    video.pause();
    videoContainer.classList.remove("paused");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video2");
  const videoContainer = document.querySelector(".video-container2");

  videoContainer.addEventListener("mouseover", () => {
    video.play();
    videoContainer.classList.add("paused");
  });

  videoContainer.addEventListener("mouseout", () => {
    video.pause();
    videoContainer.classList.remove("paused");
  });
});
