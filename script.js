const text = "Build Something Amazing 🚀";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 50);
  }
}

typingEffect();
function showMessage() {
  document.getElementById("message").innerText = "🔥 You clicked the button!";
}

// Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
let count = 0;
const target = 1000;

function updateCounter() {
  if (count < target) {
    count += 10;
    document.getElementById("count").innerText = count;
    setTimeout(updateCounter, 20);
  }
}

updateCounter();