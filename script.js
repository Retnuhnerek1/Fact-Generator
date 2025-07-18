<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Dev Log</title>
  <style>
    :root {
      --bg-color: #f4f4f4;
      --text-color: #333;
      --button-bg: #ff4444;
      --button-hover: #ff6666;
      --select-bg: white;
      --fact-bg: white;
      --shadow: rgba(0, 0, 0, 0.1);
    }

    .dark-mode {
      --bg-color: #1a1a1a;
      --text-color: #e0e0e0;
      --button-bg: #ff4444;
      --button-hover: #ff6666;
      --select-bg: #333;
      --fact-bg: #2d2d2d;
      --shadow: rgba(255, 255, 255, 0.1);
    }

    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    #header {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 800px;
      margin: 0 auto 30px;
      position: relative;
    }

    h1 {
      margin: 0;
      flex-grow: 1;
      text-align: center;
    }

    #darkModeToggle {
      background: none;
      border: none;
      font-size: 1.5em;
      cursor: pointer;
      padding: 5px;
      border-radius: 5px;
      transition: background-color 0.3s ease;
      position: absolute;
      right: 0;
    }

    #darkModeToggle:hover {
      background-color: var(--shadow);
    }

    button {
      padding: 0.75em 1.5em;
      font-size: 1rem;
      background-color: var(--button-bg);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    button:hover {
      background-color: var(--button-hover);
    }

    #log-content {
      max-width: 800px;
      margin: 2em auto;
      background-color: var(--fact-bg);
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px var(--shadow);
    }

    a {
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div id="header">
    <h1>🛠️ Dev Log</h1>
    <button id="darkModeToggle" onclick="toggleDarkMode()" title="Light/Dark Mode Toggle">
  <span id="mode-icon">☀️</span>
</button>

  </div>

  <div id="log-content">
    <Strong>Version 1.0:</Strong><p>This version launched on 7/17/2025. It included dark/light mode, a dev log (the one you are reading now), and 5 categories with subcategories and a few facts, those include: Science, History, Animals, Food, and Technology.</p>
  </div>

  <div style="text-align: center; margin-top: 1em;">
    <a href="index.html">
      <button>
        ← Back to Fact Generator
      </button>
    </a>
  </div>

  <script>
    // Dark mode logic (exact copy from index.html)
    function toggleDarkMode() {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  </script>
  <script src="script.js"></script>

</body>
</html>
