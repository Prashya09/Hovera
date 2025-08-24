document.addEventListener("DOMContentLoaded", () => {
  initMenuToggle();
  initCounterAnimation();
  initServiceFilter();
  initCarousel();
  initContactForm();
});

/* ---------- Menu Toggle ---------- */
function initMenuToggle() {
  const burger = document.querySelector(".burger");
  const mobileDrawer = document.querySelector(".mobile-drawer");

  burger.addEventListener("click", () => {
    mobileDrawer.classList.toggle("show");
  });
}

/* ---------- Counter Animation ---------- */
function initCounterAnimation() {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    let target = +counter.dataset.target;
    let count = 0;
    let step = target / 100;

    let updateCounter = () => {
      count += step;
      if (count < target) {
        counter.textContent = Math.floor(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    updateCounter();
  });
}

/* ---------- Service Filter ---------- */
function initServiceFilter() {
  const chips = document.querySelectorAll(".chip");
  const cards = document.querySelectorAll("#serviceGrid .card");

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");

      let filter = chip.dataset.filter;
      cards.forEach(card => {
        if (filter === "all" || card.dataset.cat === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* ---------- Testimonials Carousel ---------- */
function initCarousel() {
  const slides = document.querySelectorAll(".carousel .slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });
}

/* ---------- Contact Form ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  form.addEventListener("submit", e => {
    e.preventDefault();
    msg.textContent = "Sending...";
    msg.style.color = "blue";

    setTimeout(() => {
      msg.textContent = "Message sent successfully!";
      msg.style.color = "green";
      form.reset();
    }, 1000);
  });
}
