// Menu mobile
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Fond étoilé animé (élément signature du site)
const canvas = document.getElementById("starfield");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let stars = [];
  let w, h;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    const count = Math.floor((w * h) / 6000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.2,
      baseAlpha: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const alpha = s.baseAlpha + Math.sin(t * s.twinkleSpeed + s.phase) * 0.25;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(237, 234, 227, ${Math.max(0, alpha)})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    requestAnimationFrame(draw);
  } else {
    draw(0);
  }
  const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
let currentAlbum = [];
let currentIndex = 0;

function openLightbox(album, index) {
  currentAlbum = album;
  currentIndex = index;
  lbImg.src = currentAlbum[currentIndex];
  lightbox.classList.add("open");
}
function showImage(delta) {
  currentIndex = (currentIndex + delta + currentAlbum.length) % currentAlbum.length;
  lbImg.src = currentAlbum[currentIndex];
}

document.querySelectorAll(".card[data-album]").forEach(card => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    const album = card.dataset.album.split(",");
    openLightbox(album, 0);
  });
});

document.querySelector(".lb-close").addEventListener("click", () => lightbox.classList.remove("open"));
document.querySelector(".lb-prev").addEventListener("click", () => showImage(-1));
document.querySelector(".lb-next").addEventListener("click", () => showImage(1));
lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.classList.remove("open"); })
}
