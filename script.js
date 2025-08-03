
const facts = {
  // Science Categories
  astronomy: [
    "A day on Venus is longer than its year.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Neutron stars can spin at 600 rotations per second.",
    "Jupiter has 95 known moons, including four large ones discovered by Galileo in 1610.",
    "One million Earths could fit inside the Sun.",
    "The closest star to Earth (other than the Sun) is Proxima Centauri, 4.24 light-years away.",
    "Black holes can slow down time - time passes slower near them due to gravity.",
    "Saturn's moon Titan has lakes and rivers made of liquid methane."
  ],

  biology: [
    "Mitochondria are often called the powerhouses of cells because they generate most of the cell's energy.",
    "DNA in humans shares approximately 60% similarity with bananas.",
    "The human body has over 37 trillion cells.",
    "Your brain uses about 20% of your body's total energy.",
    "Humans share 99.9% of their DNA with each other.",
    "The human eye can distinguish about 10 million different colors.",
    "Some bacteria can survive in temperatures over 250°F (121°C).",
    "Tardigrades can survive in the vacuum of space for over 10 days."
  ],

  physics: [
    "Light behaves both as a particle and a wave—a phenomenon known as wave-particle duality.",
    "Absolute zero, 0 Kelvin, is the theoretical point where atoms stop moving entirely.",
    "A single teaspoon of a neutron star would weigh about 6 billion tons.",
    "Time moves slower in stronger gravitational fields, as proven by Einstein's theory of relativity.",
    "Sound travels about 4 times faster in water than in air.",
    "Lightning is about 5 times hotter than the surface of the Sun.",
    "Quantum entanglement allows particles to instantaneously affect each other across vast distances.",
    "The speed of light in a vacuum is exactly 299,792,458 meters per second."
  ],

  chemistry: [
    "The smell of rain comes from a chemical called geosmin, produced by soil-dwelling bacteria.",
    "Hydrogen is the most abundant element in the universe, making up roughly 75% of its elemental mass.",
    "Gold is so malleable that a single gram can be stretched into a wire more than 2 kilometers long.",
    "Diamond and graphite are both made of carbon but have completely different properties.",
    "Water is the only substance that naturally exists in all three states of matter on Earth.",
    "Helium was discovered on the Sun before it was found on Earth.",
    "A single drop of water contains more than a billion billion atoms.",
    "Sulfuric acid is so corrosive it can dissolve metal, but it's also used in car batteries."
  ],

  "earth-science": [
    "The Earth's core is as hot as the surface of the Sun.",
    "The continents move about 2 inches per year due to plate tectonics.",
    "A single volcano can lower global temperatures for years.",
    "The deepest point on Earth is the Mariana Trench, nearly 7 miles deep.",
    "Earth's magnetic poles flip every 200,000 to 300,000 years on average.",
    "More than 99% of all species that ever lived on Earth are now extinct."
  ],

  medical: [
    "Your heart beats about 100,000 times per day.",
    "The human brain contains approximately 86 billion neurons.",
    "Your stomach gets an entirely new lining every 3-4 days.",
    "Babies are born with 270 bones, but adults have only 206.",
    "The human nose can distinguish over 1 trillion different scents.",
    "Your liver can regenerate itself even if 75% of it is removed."
  ],

  // Animals & Nature Categories
  mammals: [
    "Blue whales are the largest animals ever known to have existed on Earth.",
    "A group of pandas is called an 'embarrassment'.",
    "Elephants can hear through their feet, detecting vibrations from miles away.",
    "Bats are the only mammals capable of true flight.",
    "Dolphins have names for each other - unique whistle signatures.",
    "Koalas sleep 18-22 hours per day.",
    "A giraffe's tongue is 18-20 inches long and blue-black to prevent sunburn."
  ],

  birds: [
    "Pigeons can be trained to detect cancer in medical images with remarkable accuracy.",
    "Owls have specialized feathers for silent flight.",
    "The Arctic Tern migrates over 40,000 miles each year from Arctic to Antarctic.",
    "Hummingbirds are the only birds that can fly backwards.",
    "A group of flamingos is called a 'flamboyance'.",
    "Penguins can hold their breath for up to 20 minutes underwater.",
    "Crows can recognize human faces and hold grudges for years.",
    "The fastest bird in the world is the peregrine falcon, diving at over 240 mph."
  ],

  "marine-life": [
    "Octopuses have three hearts and blue blood.",
    "Sharks are older than trees - they've existed for over 400 million years.",
    "A group of jellyfish is called a 'smack'.",
    "Sea otters hold hands while sleeping to avoid drifting apart.",
    "The giant Pacific octopus can change both color and texture to camouflage.",
    "Some species of deep-sea fish create their own light through bioluminescence.",
    "Whale songs can travel hundreds of miles underwater."
  ],

  insects: [
    "Honey bees communicate through dance to share location of flowers.",
    "A single ant colony can contain millions of individuals.",
    "Dragonflies have been around for 300 million years.",
    "Butterflies taste with their feet.",
    "Some beetles can lift objects 850 times their own weight.",
    "Mosquitoes are attracted to people who emit more carbon dioxide.",
    "Fireflies are actually beetles, not flies."
  ],

  plants: [
    "Trees can communicate with each other through underground fungal networks.",
    "Bananas are berries, but strawberries aren't botanically berries.",
    "The oldest living tree is over 5,000 years old.",
    "Some plants can live for thousands of years.",
    "Venus flytraps can count - they need multiple triggers before closing.",
    "Bamboo is the fastest-growing plant, growing up to 3 feet in 24 hours.",
    "The largest living organism is a fungus covering 2,385 acres in Oregon."
  ],

  ecosystems: [
    "Rainforests produce about 40% of the world's oxygen.",
    "A single cloud can weigh more than a million pounds.",
    "Lightning strikes the Earth about 100 times per second.",
    "The Amazon rainforest creates its own weather patterns.",
    "Coral reefs support 25% of all marine species despite covering less than 1% of the ocean.",
    "Wetlands can filter and clean water naturally."
  ],

  // History & Culture Categories
  "ancient-history": [
    "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.",
    "The Great Wall of China isn't visible from space with the naked eye, contrary to popular belief.",
    "Ancient Romans used urine as mouthwash because of its ammonia content.",
    "The Library of Alexandria was accidentally burned down multiple times.",
    "Ancient Egyptians used honey as currency and medicine.",
    "The Antikythera mechanism was an ancient Greek analog computer from 100 BC."
  ],

  "modern-history": [
    "Napoleon Bonaparte was actually average height for his time at 5'7\".",
    "The first recorded use of the word 'hello' as a greeting was in 1827.",
    "Oxford University is older than the Aztec Empire by about 200 years.",
    "The shortest war in history lasted only 38-45 minutes between Britain and Zanzibar in 1896.",
    "The Eiffel Tower was originally intended to be temporary.",
    "The Berlin Wall fell in 1989, but wasn't completely demolished until 1992."
  ],

  "world-cultures": [
    "There are over 7,000 languages spoken in the world today.",
    "Iceland has no mosquitoes.",
    "Japan has over 6,800 islands, but only about 400 are inhabited.",
    "The Netherlands is the most densely populated country in Europe.",
    "Bhutan is the only carbon-negative country in the world.",
    "Vatican City is the smallest country in the world with only 800 residents."
  ],

  archaeology: [
    "Pompeii was preserved so well that we found intact loaves of bread from 79 AD.",
    "Stonehenge is older than the Egyptian pyramids.",
    "The Rosetta Stone was key to deciphering Egyptian hieroglyphs.",
    "Machu Picchu was built without wheels, iron tools, or draft animals.",
    "The Terracotta Army consists of over 8,000 life-sized soldier statues.",
    "Göbekli Tepe in Turkey is considered the world's first temple, built 11,500 years ago."
  ],

  // Technology & Innovation Categories
  computers: [
    "The first computer bug was an actual bug - a moth found trapped in a Harvard computer in 1947.",
    "More computing power exists in a modern smartphone than was used for the Apollo 11 moon landing.",
    "The '@' symbol was used by merchants in the 1600s to indicate quantity, long before email.",
    "The first webcam was created to monitor a coffee pot at Cambridge University.",
    "WiFi was invented as a byproduct of attempts to detect black holes.",
    "The first computer mouse was made of wood.",
    "Over 4 billion people use the internet worldwide."
  ],

  inventions: [
    "The airplane was invented before sliced bread.",
    "Velcro was inspired by burr seeds sticking to a dog's fur.",
    "The microwave oven was invented by accident while working on radar technology.",
    "Bubble wrap was originally intended to be wallpaper.",
    "The chainsaw was originally invented for medical purposes.",
    "Post-it Notes were created by accident when trying to make super-strong adhesive."
  ],

  engineering: [
    "The Golden Gate Bridge is painted International Orange for visibility in fog.",
    "The Burj Khalifa sways up to 6 feet at the top during high winds.",
    "Roman concrete is still stronger than modern concrete after 2,000 years.",
    "The Channel Tunnel is the longest underwater tunnel in the world.",
    "The Panama Canal uses locks to lift ships 85 feet above sea level.",
    "Skyscrapers are designed to sway slightly to withstand wind and earthquakes."
  ],

  "space-tech": [
    "The International Space Station orbits Earth every 90 minutes.",
    "GPS satellites must account for Einstein's relativity to stay accurate.",
    "Space suits cost about $12 million each.",
    "The Hubble Space Telescope has been operating for over 30 years.",
    "Mars rovers are sterilized to avoid contaminating the planet with Earth bacteria.",
    "Communication with Mars can take up to 24 minutes one way."
  ],

  // Geography & Travel Categories
  countries: [
    "Russia spans 11 time zones.",
    "Monaco could fit into New York's Central Park 7 times.",
    "Australia is wider than the Moon.",
    "Canada has more lakes than the rest of the world combined.",
    "The Dead Sea is 9 times saltier than the ocean.",
    "Antarctica is technically the world's largest desert."
  ],

  landmarks: [
    "The Statue of Liberty was a gift from France to America.",
    "Mount Everest grows about 4mm taller each year.",
    "The Leaning Tower of Pisa leans more each year, but very slowly.",
    "Niagara Falls moves upstream about 1 foot per year due to erosion.",
    "The Grand Canyon reveals rock layers from 2 billion years ago.",
    "Uluru (Ayers Rock) is actually mostly underground - only 5% is visible."
  ],

  weather: [
    "Lightning is 5 times hotter than the surface of the Sun.",
    "A hurricane releases energy equivalent to 10,000 nuclear bombs per day.",
    "The coldest temperature ever recorded was -128.6°F in Antarctica.",
    "Raindrops are not tear-shaped - they're more like hamburger buns.",
    "Snow is actually colorless - it appears white because it reflects all light.",
    "The eye of a hurricane can be completely calm and clear."
  ],

  // Food & Cooking Categories
  cuisine: [
    "Chocolate was once used as currency by the Aztecs.",
    "Sushi originally started as a way to preserve fish.",
    "Pizza Margherita was created to honor the Italian queen.",
    "French fries actually originated in Belgium, not France.",
    "Ketchup was originally sold as medicine in the 1830s.",
    "The sandwich was named after the Earl of Sandwich."
  ],

  ingredients: [
    "Cashews grow on the bottom of cashew apples, not in shells like other nuts.",
    "Vanilla is the second most expensive spice in the world after saffron.",
    "Carrots were originally purple, not orange.",
    "Honey never spoils - archaeologists have found edible honey in ancient Egyptian tombs.",
    "Peanuts are not nuts - they're legumes related to peas and beans.",
    "Rhubarb leaves are poisonous, but the stalks are safe to eat."
  ],

  "cooking-history": [
    "The most expensive pizza in the world costs $12,000 and is topped with three types of caviar.",
    "Fortune cookies were actually invented in San Francisco, not China.",
    "The ice cream cone was invented at the 1904 World's Fair.",
    "Sliced bread wasn't sold commercially until 1928.",
    "TV dinners were invented to use up 260 tons of leftover Thanksgiving turkey.",
    "Coca-Cola was originally green and sold as medicine."
  ],

  // Arts & Entertainment Categories
  music: [
    "The longest recorded song is over 13 hours long.",
    "Beethoven continued composing even after becoming deaf.",
    "The oldest known musical instrument is a 40,000-year-old flute.",
    "Mozart composed over 600 pieces of music in his short 35-year life.",
    "The human ear can distinguish between about 400,000 different sounds.",
    "Listening to music releases dopamine, the same chemical released when eating chocolate."
  ],

  movies: [
    "The first movie theater opened in 1905 and charged 5 cents admission.",
    "The shortest film ever nominated for an Oscar was only 87 seconds long.",
    "The MGM lion's roar is actually a tiger's roar.",
    "The first film with synchronized sound was 'The Jazz Singer' in 1927.",
    "Alfred Hitchcock never won an Oscar for directing despite 5 nominations.",
    "The most expensive film ever made cost over $400 million."
  ],

  literature: [
    "The best-selling book of all time is the Bible with over 5 billion copies sold.",
    "Shakespeare invented over 1,700 words that we still use today.",
    "The longest novel ever written has over 4 million words.",
    "J.K. Rowling wrote the first Harry Potter book on napkins in a café.",
    "Dr. Seuss wrote 'Green Eggs and Ham' using only 50 different words.",
    "The first novel ever written was 'The Tale of Genji' in 11th century Japan."
  ],

  art: [
    "The Mona Lisa has no eyebrows - it was fashionable to shave them off in her time.",
    "Van Gogh only sold one painting during his lifetime.",
    "The most expensive painting ever sold was 'Salvator Mundi' for $450 million.",
    "Pablo Picasso created over 50,000 works of art in his lifetime.",
    "The Statue of Liberty was originally brown - it turned green due to oxidation.",
    "Cave paintings in France are over 30,000 years old."
  ],

  // Sports & Human Body Categories
  sports: [
    "Golf balls have dimples to help them fly farther.",
    "The Olympics were originally held in honor of the Greek god Zeus.",
    "Basketball was invented using peach baskets and a soccer ball.",
    "The fastest recorded tennis serve was 163.7 mph.",
    "Baseball's longest game lasted 8 hours and 25 minutes.",
    "The marathon distance of 26.2 miles commemorates the run from Marathon to Athens."
  ],

  "human-body": [
    "Your heart beats about 100,000 times per day.",
    "The human brain contains approximately 86 billion neurons.",
    "Your stomach gets an entirely new lining every 3-4 days.",
    "Babies are born with 270 bones, but adults have only 206.",
    "The human nose can distinguish over 1 trillion different scents.",
    "Your liver can regenerate itself even if 75% of it is removed.",
    "You produce about 1.5 liters of saliva every day.",
    "Your eyes can distinguish about 10 million colors."
  ],

  psychology: [
    "The average person makes about 35,000 decisions per day.",
    "Your brain uses about 20% of your body's total energy.",
    "Humans can only maintain about 150 stable social relationships.",
    "Color red can actually make you stronger and more confident.",
    "Smiling can trick your brain into feeling happier.",
    "You're more creative when you're tired.",
    "Music can improve your mood within 13 seconds of listening."
  ]
};

let currentUser = localStorage.getItem("currentUser");
let sessionStartTime = Date.now();
let currentFact = "";
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Initialize dark mode
function initializeDarkMode() {
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeToggle').textContent = '☀️';
  }
}

// Toggle dark mode
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode');
  document.getElementById('darkModeToggle').textContent = isDarkMode ? '☀️' : '🌙';
  localStorage.setItem('darkMode', isDarkMode);
}

function toggleForm(formType) {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById(formType + "Form").classList.toggle("hidden");
}

function validateInput(username, password) {
  if (!username || !password) {
    showMessage("Please enter both username and password.", "error");
    return false;
  }
  if (username.length < 3) {
    showMessage("Username must be at least 3 characters long.", "error");
    return false;
  }
  if (password.length < 6) {
    showMessage("Password must be at least 6 characters long.", "error");
    return false;
  }
  return true;
}

function showMessage(message, type = "info") {
  // Create and show temporary message
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
  
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

function signup() {
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  
  if (!validateInput(username, password)) return;
  
  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (users[username]) {
    showMessage("Username already exists.", "error");
    return;
  }

  users[username] = { 
    password, 
    stats: { factsGenerated: 0, timeSpent: 0 },
    favorites: []
  };
  localStorage.setItem("users", JSON.stringify(users));
  showMessage("Sign up successful! Please log in.", "success");
  
  // Clear form and hide it
  document.getElementById("signupUsername").value = "";
  document.getElementById("signupPassword").value = "";
  document.getElementById("signupForm").classList.add("hidden");
}

function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  
  if (!validateInput(username, password)) return;
  
  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (!users[username] || users[username].password !== password) {
    showMessage("Invalid username or password.", "error");
    return;
  }

  currentUser = username;
  localStorage.setItem("currentUser", username);
  updateUIForLoggedInUser();
  
  // Clear form and hide it
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
  document.getElementById("loginForm").classList.add("hidden");
  
  sessionStartTime = Date.now();
  showMessage(`Welcome back, ${username}!`, "success");
}

function updateUIForLoggedInUser() {
  document.getElementById("loginStatus").textContent = `Logged in as ${currentUser}`;
  document.getElementById("statsLink").style.display = "inline-block";
  document.getElementById("favoritesLink").style.display = "inline-block";
  document.getElementById("historyLink").style.display = "inline-block";
  document.getElementById("userControls").style.display = "block";
}

function logout() {
  if (!currentUser) return;
  saveTimeSpent();
  localStorage.removeItem("currentUser");
  currentUser = null;
  document.getElementById("loginStatus").textContent = "";
  document.getElementById("statsLink").style.display = "none";
  document.getElementById("favoritesLink").style.display = "none";
  document.getElementById("historyLink").style.display = "none";
  document.getElementById("userControls").style.display = "none";
  document.getElementById("factActions").classList.add("hidden");
  document.getElementById("favoritesSection").classList.add("hidden");
  document.getElementById("historySection").classList.add("hidden");
  showMessage("Logged out successfully.", "success");
}

function saveTimeSpent() {
  if (!currentUser) return;
  const users = JSON.parse(localStorage.getItem("users"));
  const elapsed = Date.now() - sessionStartTime;
  users[currentUser].stats.timeSpent += elapsed;
  localStorage.setItem("users", JSON.stringify(users));
}

function generateFact() {
  if (!currentUser) {
    showMessage("Please log in to generate facts.", "error");
    return;
  }

  // Show loading state
  document.getElementById("btnText").classList.add("hidden");
  document.getElementById("btnLoader").classList.remove("hidden");
  document.getElementById("generateBtn").disabled = true;

  // Simulate API delay for better UX
  setTimeout(() => {
    const topic = document.getElementById("topicSelect").value;
    const topicFacts = topic === "any" ? Object.values(facts).flat() : facts[topic];
    currentFact = topicFacts[Math.floor(Math.random() * topicFacts.length)];

    document.getElementById("factDisplay").textContent = currentFact;
    document.getElementById("factActions").classList.remove("hidden");
    
    // Update favorite button state
    updateFavoriteButton();

    // Add to history
    addToHistory(currentFact, topic);

    // Update stats
    const users = JSON.parse(localStorage.getItem("users"));
    users[currentUser].stats.factsGenerated++;
    localStorage.setItem("users", JSON.stringify(users));

    // Hide loading state
    document.getElementById("btnText").classList.remove("hidden");
    document.getElementById("btnLoader").classList.add("hidden");
    document.getElementById("generateBtn").disabled = false;
  }, 500);
}

function toggleFavorite() {
  if (!currentUser || !currentFact) return;

  const users = JSON.parse(localStorage.getItem("users"));
  const userFavorites = users[currentUser].favorites || [];
  
  const factIndex = userFavorites.indexOf(currentFact);
  if (factIndex === -1) {
    userFavorites.push(currentFact);
    showMessage("Added to favorites!", "success");
  } else {
    userFavorites.splice(factIndex, 1);
    showMessage("Removed from favorites!", "info");
  }
  
  users[currentUser].favorites = userFavorites;
  localStorage.setItem("users", JSON.stringify(users));
  updateFavoriteButton();
  
  // Refresh favorites list if it's open
  if (!document.getElementById("favoritesSection").classList.contains("hidden")) {
    displayFavorites();
  }
}

function updateFavoriteButton() {
  if (!currentUser || !currentFact) return;
  
  const users = JSON.parse(localStorage.getItem("users"));
  const userFavorites = users[currentUser].favorites || [];
  const isFavorited = userFavorites.includes(currentFact);
  
  document.getElementById("favoriteBtn").textContent = isFavorited ? "💔 Unfavorite" : "❤️ Favorite";
}

function shareFact() {
  if (!currentFact) return;
  
  navigator.clipboard.writeText(currentFact).then(() => {
    showMessage("Fact copied to clipboard!", "success");
  }).catch(() => {
    showMessage("Failed to copy fact.", "error");
  });
}

function toggleFavorites() {
  const favoritesSection = document.getElementById("favoritesSection");
  if (favoritesSection.classList.contains("hidden")) {
    displayFavorites();
    favoritesSection.classList.remove("hidden");
  } else {
    favoritesSection.classList.add("hidden");
  }
}

function displayFavorites(searchTerm = "") {
  if (!currentUser) return;
  
  const users = JSON.parse(localStorage.getItem("users"));
  const userFavorites = users[currentUser].favorites || [];
  const favoritesList = document.getElementById("favoritesList");
  
  if (userFavorites.length === 0) {
    favoritesList.innerHTML = "<p>No favorite facts yet. Start generating and favoriting facts!</p>";
    return;
  }
  
  const filteredFavorites = userFavorites.filter(fact => 
    fact.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (filteredFavorites.length === 0 && searchTerm) {
    favoritesList.innerHTML = "<p>No favorites match your search.</p>";
    return;
  }
  
  favoritesList.innerHTML = filteredFavorites.map((fact, index) => {
    const originalIndex = userFavorites.indexOf(fact);
    return `
      <div class="favorite-item">
        <p>${fact}</p>
        <button onclick="removeFavorite(${originalIndex})" class="remove-btn">🗑️</button>
      </div>
    `;
  }).join("");
}

function removeFavorite(index) {
  const users = JSON.parse(localStorage.getItem("users"));
  users[currentUser].favorites.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  displayFavorites();
  updateFavoriteButton();
  showMessage("Removed from favorites!", "info");
}

function addToHistory(fact, topic) {
  if (!currentUser) return;
  
  const users = JSON.parse(localStorage.getItem("users"));
  if (!users[currentUser].history) {
    users[currentUser].history = [];
  }
  
  const historyItem = {
    fact: fact,
    topic: topic,
    timestamp: new Date().toLocaleString()
  };
  
  // Add to beginning and limit to 50 items
  users[currentUser].history.unshift(historyItem);
  if (users[currentUser].history.length > 50) {
    users[currentUser].history = users[currentUser].history.slice(0, 50);
  }
  
  localStorage.setItem("users", JSON.stringify(users));
}

function toggleHistory() {
  const historySection = document.getElementById("historySection");
  if (historySection.classList.contains("hidden")) {
    displayHistory();
    historySection.classList.remove("hidden");
    document.getElementById("favoritesSection").classList.add("hidden");
  } else {
    historySection.classList.add("hidden");
  }
}

function displayHistory(searchTerm = "") {
  if (!currentUser) return;
  
  const users = JSON.parse(localStorage.getItem("users"));
  const userHistory = users[currentUser].history || [];
  const historyList = document.getElementById("historyList");
  
  if (userHistory.length === 0) {
    historyList.innerHTML = "<p>No fact history yet. Start generating facts!</p>";
    return;
  }
  
  const filteredHistory = userHistory.filter(item => 
    item.fact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (filteredHistory.length === 0 && searchTerm) {
    historyList.innerHTML = "<p>No history matches your search.</p>";
    return;
  }
  
  historyList.innerHTML = filteredHistory.map((item, index) => `
    <div class="favorite-item">
      <div>
        <p style="margin-bottom: 5px;">${item.fact}</p>
        <small style="opacity: 0.7;">📂 ${item.topic} • 🕒 ${item.timestamp}</small>
      </div>
      <button onclick="addHistoryToFavorites('${item.fact.replace(/'/g, "\\'")}', ${index})" class="action-btn" style="margin-left: 10px; padding: 5px 10px;">❤️</button>
    </div>
  `).join("");
}

function addHistoryToFavorites(fact, index) {
  const users = JSON.parse(localStorage.getItem("users"));
  const userFavorites = users[currentUser].favorites || [];
  
  if (!userFavorites.includes(fact)) {
    userFavorites.push(fact);
    users[currentUser].favorites = userFavorites;
    localStorage.setItem("users", JSON.stringify(users));
    showMessage("Added to favorites!", "success");
  } else {
    showMessage("Already in favorites!", "info");
  }
}



// Event listeners
document.getElementById("generateBtn").addEventListener("click", generateFact);
document.getElementById("favoriteBtn").addEventListener("click", toggleFavorite);
document.getElementById("shareBtn").addEventListener("click", shareFact);
document.getElementById("logoutBtn").addEventListener("click", logout);
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

// Search functionality
document.getElementById("favoritesSearch").addEventListener("input", (e) => {
  displayFavorites(e.target.value);
});

document.getElementById("historySearch").addEventListener("input", (e) => {
  displayHistory(e.target.value);
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.tagName !== "INPUT") {
    e.preventDefault();
    if (currentUser) generateFact();
  }
});

// Allow Enter key in forms
document.getElementById("loginPassword").addEventListener("keydown", (e) => {
  if (e.key === "Enter") login();
});

document.getElementById("signupPassword").addEventListener("keydown", (e) => {
  if (e.key === "Enter") signup();
});

// Hide auth forms when clicking outside them
document.addEventListener("click", (e) => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  
  if (!loginForm.contains(e.target) && !signupForm.contains(e.target) && 
      !e.target.textContent.includes("Login") && !e.target.textContent.includes("Sign Up")) {
    loginForm.classList.add("hidden");
    signupForm.classList.add("hidden");
  }
});

// Save time spent before unloading
window.addEventListener("beforeunload", saveTimeSpent);

// Initialize on page load
window.addEventListener("load", () => {
  initializeDarkMode();
  if (currentUser) {
    updateUIForLoggedInUser();
  }
});

// Make functions globally available
window.toggleForm = toggleForm;
window.signup = signup;
window.login = login;
window.toggleFavorites = toggleFavorites;
window.removeFavorite = removeFavorite;
window.toggleHistory = toggleHistory;
window.addHistoryToFavorites = addHistoryToFavorites;
