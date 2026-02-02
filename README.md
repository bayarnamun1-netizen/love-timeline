<!DOCTYPE html>
<html lang="mn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>💖 Our Love Timeline 💖</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="toggle" onclick="toggleTheme()">🌙</div>

<!-- PIN SCREEN -->
<div id="pinScreen" class="center">
  <div class="card">
    <h2>🔐 Бидний PIN юу байж болох вэ?😝 /4 оронтой жүү/</h2>
    <input id="pin" type="password" placeholder="PIN">
    <button onclick="checkPin()">Нээх</button>
  </div>
</div>

<!-- MAIN -->
<div id="main" class="center" style="display:none;">

  <div class="card">
    <h1>💖 Our Love Timeline 💖</h1>
    <p>Date of Website creation /by YOUR amazing gf/: <b id="today"></b></p>

    <!-- АНХ ТАНИЛЦСАН ӨДӨР -->
    <div class="section" data-key="firstMeet">
      <h2>☕ Анх танилцсан өдөр</h2>
      <div class="sub-section" contenteditable="true">Дурсамжаа буулга🫀…</div>
      <button class="add-sub" onclick="addSubSection(this)">➕</button>
    </div>

    <!-- АНХ ҮЕРХСЭН ӨДӨР -->
    <div class="section" data-key="firstLove">
      <h2>🎀 Анх үерхсэн өдөр 🎉</h2>
      <div class="sub-section" contenteditable="true">Дурсамжаа буулга🫀…</div>
      <button class="add-sub" onclick="addSubSection(this)">➕</button>
    </div>

    <!-- ДУРТАЙ ДУРСАМЖ -->
    <div class="section" data-key="memory">
      <h2>🙂‍↕️ Дуртай дурсамжууд 🫧</h2>
      <div class="sub-section" contenteditable="true">Дурсамжаа буулга🫀…</div>
      <button class="add-sub" onclick="addSubSection(this)">➕</button>
    </div>

    <!-- ҮЙЛДЛҮҮД -->
    <div class="section" data-key="actions">
      <h2>🥺 Миний хайртай чиний минь үйлдлүүд 🦔</h2>
      <div class="sub-section" contenteditable="true">Энд бичнэ үү…</div>
      <button class="add-sub" onclick="addSubSection(this)">➕</button>
    </div>

    <!-- ИРЭЭДҮЙН БИД -->
    <div class="section" data-key="future">
      <h2>🌈 Ирээдүйн бид 💍</h2>
      <div class="sub-section" contenteditable="true">Дурсамжаа буулга🫀…</div>
      <button class="add-sub" onclick="addSubSection(this)">➕</button>
    </div>

    <!-- ЗУРГИЙН ХЭСЭГ -->
    <div class="section">
      <h2>🎞️ Дурсамжит зургууд 🧸</h2>
      <input type="file" accept="image/*" onchange="uploadImage(event)">
      <img id="photo">
    </div>

    <button onclick="saveAll()">🤍 БҮГДИЙГ ХАДГАЛАХ</button>
  </div>
</div>

<!-- Popup -->
<div id="popup" class="popup"></div>

<script src="script.js"></script>
</body>
</html>
