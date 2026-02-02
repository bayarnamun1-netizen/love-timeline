const correctPin = "1016";

/* PIN шалгах */
function checkPin() {
  if (document.getElementById("pin").value === correctPin) {
    document.getElementById("pinScreen").style.display = "none";
    document.getElementById("main").style.display = "flex";
    loadAll();
    emojiRain();
    showPopup("💖 Чамд зориулан хийсэн сайттай минь танилц!");
  } else {
    showPopup("❌ PIN яахаараа мэддэггүй билээ? ХМММ!");
  }
}

/* Theme toggle */
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.className);
}

/* Emoji rain */
function emojiRain() {
  const emojis = ["💖", "✨", "💕", "🌸", "🥰", "💫", "🤍", "🧸", "🥹", "🧇", "🌼"];
  for (let i = 0; i < 35; i++) {
    const e = document.createElement("div");
    e.className = "emoji";
    e.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    e.style.left = Math.random() * 100 + "vw";
    e.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(e);
    setTimeout(() => e.remove(), 5000);
  }
}

/* Popup show */
function showPopup(msg) {
  const popup = document.getElementById("popup");
  popup.innerText = msg;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 2500);
}

/* Зураг upload */
function uploadImage(e) {
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById("photo").src = reader.result;
    localStorage.setItem("image", reader.result);
    showPopup("🎀 Зураг хадгалагдлаа!");
  };
  reader.readAsDataURL(e.target.files[0]);
}

/* Sub-section нэмэх */
function addSubSection(btn) {
  const container = btn.previousElementSibling;
  const div = document.createElement("div");
  div.className = "sub-section";
  div.contentEditable = true;
  div.innerText = "Дурсамжаа буулга💓…";
  container.parentNode.insertBefore(div, btn);
}

/* Бүх зүйл хадгалах */
function saveAll() {
  document.querySelectorAll(".section").forEach((sec) => {
    const key = sec.getAttribute("data-key");
    if (key) {
      const htmls = Array.from(sec.querySelectorAll(".sub-section")).map(
        (s) => s.innerHTML
      );
      localStorage.setItem(key, JSON.stringify(htmls));
    }
  });
  localStorage.setItem("image", document.getElementById("photo").src);
  localStorage.setItem("theme", document.body.className);
  showPopup("🌷 Бүх зүйл хадгалагдлаа!");
}

/* Load хадгалсан зүйлс */
function loadAll() {
  document.querySelectorAll(".section").forEach((sec) => {
    const key = sec.getAttribute("data-key");
    if (key) {
      const saved = localStorage.getItem(key);
      if (saved) {
        const arr = JSON.parse(saved);
        const container = sec.querySelectorAll(".sub-section");
        container.forEach((s, i) => {
          if (arr[i]) s.innerHTML = arr[i];
        });
        if (arr.length > container.length) {
          for (let i = container.length; i < arr.length; i++) {
            const div = document.createElement("div");
            div.className = "sub-section";
            div.contentEditable = true;
            div.innerHTML = arr[i];
            sec.insertBefore(div, sec.querySelector(".add-sub"));
          }
        }
      }
    }
  });
  const imageSaved = localStorage.getItem("image");
  if (imageSaved) document.getElementById("photo").src = imageSaved;
  const themeSaved = localStorage.getItem("theme");
  if (themeSaved) document.body.className = themeSaved;
}

/* Өнөөдрийн огноо */
document.getElementById("today").innerText = new Date().toLocaleDateString();
