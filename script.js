const factData = {
  science_space: [
    "Space is completely silent. Because space is a vacuum with no air or molecules to carry sound waves, you wouldn't hear a thing.",
    "A day on Venus is longer than its year. Venus takes about 243 Earth days to rotate once on its axis, but only 225 Earth days to orbit the Sun.",
    "The footprints on the Moon will last for millions of years. Since the Moon has no atmosphere, there's no wind or rain to erase marks."
  ],
  science_physics: [
    "The speed of light in a vacuum is approximately 299,792 kilometers per second. That's fast enough to circle the Earth over seven times in one second!",
    "Quantum entanglement allows particles to affect each other instantaneously—even if separated by vast distances. Einstein called it 'spooky action at a distance.'",
    "Absolute zero, or 0 Kelvin, is the theoretical temperature at which all molecular motion stops. It's so cold, it defies most imagination—and physics forbids anything from ever reaching it."
  ],
  science_chemistry: [
    "Water is known as the universal solvent because it dissolves more substances than any other liquid.",
    "Table salt is made from sodium (explosive in water) and chlorine (a toxic gas)—together, they form harmless NaCl.",
    "The periodic table was first drafted by Dmitri Mendeleev in 1869, who even predicted undiscovered elements!"
  ],
  science_biology: [
    "Your brain is about 75% water Despite being the command center of your body, the human brain is mostly water. That's why hydration plays a big role in mental performance!",
    "There are more bacterial cells in your body than human cells You're basically a walking ecosystem. Most of these microbes are harmless or even helpful, especially the ones in your gut.",
    "The smallest bone in your body is in your ear It's called the stapes, and it's just 0.1 inches long. This tiny bone helps transmit sound vibrations so you can hear."
  ],
  history_bc_era: [
    "The first recorded civilization, Mesopotamia, emerged around 3500 BC in what is now Iraq.",
    "Stonehenge was built between 3100-1600 BC, predating the Roman Colosseum by over 1000 years.",
    "The earliest known writing system, cuneiform, was developed by the Sumerians around 3200 BC."
  ],
  history_ancient_greece: [
    "The Olympic Games began in ancient Greece in 776 BC and were held every four years for nearly 12 centuries.",
    "Ancient Greeks invented democracy in Athens around 508 BC, where citizens could vote on laws and policies.",
    "The Parthenon in Athens was built in just 9 years (447-438 BC) and remains one of the most recognizable buildings in the world."
  ],
  history_rome: [
    "The Roman Empire at its peak covered over 5 million square kilometers, stretching from Britain to the Middle East.",
    "Romans built over 250,000 miles of roads throughout their empire, leading to the saying 'All roads lead to Rome.'",
    "The Colosseum could hold up to 80,000 spectators and had a complex system of underground tunnels called the hypogeum."
  ],
  animals_mammals: [
    "Blue whales are the largest animals ever known to have lived on Earth, weighing up to 200 tons.",
    "A group of pandas is called an 'embarrassment' of pandas.",
    "Dolphins have names for each other - unique whistle signatures that function like names."
  ],
  animals_birds: [
    "Hummingbirds are the only birds that can fly backwards and hover in place.",
    "Penguins can hold their breath for up to 20 minutes while diving for food.",
    "Owls can rotate their heads 270 degrees in either direction."
  ],
  animals_fish: [
    "Some fish can glow in the dark Many deep-sea fish use bioluminescence to attract mates or lure prey. The light comes from special organs or symbiotic bacteria.",
    "Fish can drown... in a way While it sounds odd, fish can suffocate if there’s not enough oxygen in the water—even if they’re surrounded by it.",
    "Parrotfish sleep in a bubble of mucus It might sound gross, but this slimy cocoon helps protect them from parasites and predators while they rest."
  ],
  animals_reptiles: [
    "Some species of turtles can breathe through their butts. The technical term is cloacal respiration, and it helps them stay underwater for long periods.",
    "Snakes hear using their jawbones! Since they lack external ears, vibrations from the ground travel through their skull to an inner ear, helping them track prey.",
    "Many lizards can detach their tails when threatened—a process called autotomy. The wriggling tail distracts predators while the lizard makes a getaway."
  ],
  food_italian: [
    "Pizza was originally a peasant food in Naples and didn't have tomatoes until the 18th century.",
    "Parmigiano-Reggiano is one of the oldest cheeses still made using traditional methods, dating back over 800 years.",
    "Espresso machines were invented in Italy in the early 20th century and revolutionized coffee culture worldwide."
  ],
  food_mexican: [
    "Chili peppers were domesticated in Mexico over 6,000 years ago.",
    "Chocolate originated from the cacao tree native to Mexico, where it was first consumed as a bitter drink.",
    "Tacos have been a staple of Mexican cuisine for centuries, with regional variations across the country."
  ],
  food_japanese: [
    "Sushi originally started as a method to preserve fish by fermenting it with rice.",
    "Matcha, powdered green tea, has been used in Japanese tea ceremonies for centuries.",
    "Ramen was introduced to Japan from China and became a popular comfort food after World War II."
  ],
  food_indian: [
    "India is the largest producer of spices worldwide, growing more than 70 different varieties.",
    "The concept of vegetarianism has strong roots in Indian culture and religion.",
    "Biryani is a famous mixed rice dish with Persian influences, popular across the Indian subcontinent."
  ],
  food_chinese: [
    "Chinese cuisine has eight major culinary traditions, each with unique flavors and ingredients.",
    "Soy sauce, a staple condiment, originated over 2,500 years ago in China.",
    "Dim sum is a style of Cantonese cuisine involving small bite-sized portions served in steamer baskets."
  ],
  technology_computers: [
    "The first programmable computer was the Z3, built in 1941 by Konrad Zuse.",
    "The QWERTY keyboard was designed to reduce typewriter jams by spacing out commonly used letter pairings.",
    "ENIAC was among the earliest electronic general-purpose computers, completed in 1945."
  ],
  technology_internet: [
    "The internet started as ARPANET in the late 1960s, funded by the U.S. Department of Defense.",
    "Email predates the World Wide Web by almost 20 years.",
    "The first website went live in 1991, created by Tim Berners-Lee."
  ],
  technology_smartphones: [
    "The first smartphone, IBM Simon, was introduced in 1994 and had a touchscreen.",
    "Modern smartphones have more computing power than the computers used for the Apollo moon missions.",
    "Mobile apps store opened with Apple’s App Store launch in 2008, revolutionizing software distribution."
  ]
};

const topicSelect = document.getElementById('topicSelect');
const generateBtn = document.getElementById('generateBtn');
const factDisplay = document.getElementById('factDisplay');
const darkModeToggle = document.getElementById('darkModeToggle');
const modeIcon = document.getElementById('mode-icon');

function generateFact() {
  const topic = topicSelect.value;

  let factsArray;

  if (topic === "any") {
    factsArray = Object.values(factData).flat();
  } else {
    factsArray = factData[topic] || [];
  }

  if (factsArray.length === 0) {
    factDisplay.textContent = "No facts available for this topic.";
    return;
  }

  const fact = factsArray[Math.floor(Math.random() * factsArray.length)];
  factDisplay.textContent = fact;

  // Track fact generation if user is logged in
  trackFactGeneration(topic);
}

function trackFactGeneration(category) {
  const currentUser = localStorage.getItem('factGeneratorCurrentUser');
  if (!currentUser) return;

  const users = JSON.parse(localStorage.getItem('factGeneratorUsers')) || {};
  const userData = users[currentUser];

  if (!userData) return;

  // Initialize stats if they don't exist
  if (!userData.stats) {
    userData.stats = {
      factsGenerated: 0,
      totalTimeSpent: 0,
      sessionsCount: 0,
      categoryPreferences: {},
      firstVisit: userData.createdAt || new Date().toISOString()
    };
  }

  // Increment fact count
  userData.stats.factsGenerated = (userData.stats.factsGenerated || 0) + 1;

  // Track category preference
  if (!userData.stats.categoryPreferences) {
    userData.stats.categoryPreferences = {};
  }
  userData.stats.categoryPreferences[category] = (userData.stats.categoryPreferences[category] || 0) + 1;

  // Save updated data
  users[currentUser] = userData;
  localStorage.setItem('factGeneratorUsers', JSON.stringify(users));
}

function toggleDarkMode() {
  const body = document.body;
  const isDark = body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  const icon = document.getElementById('mode-icon');
  icon.textContent = isDark ? '☀️' : '🌙';
}

// Authentication System
class AuthSystem {
  constructor() {
    this.currentUser = null;
    this.users = JSON.parse(localStorage.getItem('factGeneratorUsers')) || {};
    this.initializeAuth();
  }

  initializeAuth() {
    const loggedInUser = localStorage.getItem('factGeneratorCurrentUser');
    if (loggedInUser && this.users[loggedInUser]) {
      this.currentUser = loggedInUser;
      this.showLoggedInState();
    } else {
      this.showLoggedOutState();
    }
  }

  showLoggedInState() {
    document.getElementById('logged-out').style.display = 'none';
    document.getElementById('logged-in').style.display = 'flex';
    document.getElementById('username').textContent = this.currentUser;
  }

  showLoggedOutState() {
    document.getElementById('logged-out').style.display = 'flex';
    document.getElementById('logged-in').style.display = 'none';
  }

  register(username, email, password) {
    if (this.users[username]) {
      throw new Error('Username already exists');
    }
    
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    this.users[username] = {
      email: email,
      password: password, // In a real app, this should be hashed
      createdAt: new Date().toISOString(),
      preferences: {}
    };

    localStorage.setItem('factGeneratorUsers', JSON.stringify(this.users));
    return true;
  }

  login(username, password) {
    const user = this.users[username];
    if (!user || user.password !== password) {
      throw new Error('Invalid username or password');
    }

    this.currentUser = username;
    localStorage.setItem('factGeneratorCurrentUser', username);
    this.showLoggedInState();
    
    return true;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('factGeneratorCurrentUser');
    this.showLoggedOutState();
  }

  isLoggedIn() {
    return this.currentUser !== null;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getUserData() {
    if (!this.currentUser) return null;
    return this.users[this.currentUser];
  }
}

// Initialize authentication system
const auth = new AuthSystem();

// Time tracking for logged-in users
let sessionStartTime = Date.now();

function trackTimeSpent() {
  const currentUser = localStorage.getItem('factGeneratorCurrentUser');
  if (!currentUser) return;

  const sessionTime = Math.floor((Date.now() - sessionStartTime) / 60000); // minutes
  if (sessionTime === 0) return; // Don't save if less than a minute

  const users = JSON.parse(localStorage.getItem('factGeneratorUsers')) || {};
  const userData = users[currentUser];

  if (userData) {
    if (!userData.stats) {
      userData.stats = {
        factsGenerated: 0,
        totalTimeSpent: 0,
        sessionsCount: 0,
        categoryPreferences: {},
        firstVisit: userData.createdAt || new Date().toISOString()
      };
    }

    userData.stats.totalTimeSpent = (userData.stats.totalTimeSpent || 0) + sessionTime;
    users[currentUser] = userData;
    localStorage.setItem('factGeneratorUsers', JSON.stringify(users));
    sessionStartTime = Date.now(); // Reset session timer
  }
}

function startTimeTracking() {
  const currentUser = localStorage.getItem('factGeneratorCurrentUser');
  if (currentUser) {
    sessionStartTime = Date.now();
  }
}

function incrementSessionCount() {
  const currentUser = localStorage.getItem('factGeneratorCurrentUser');
  if (!currentUser) return;

  // Check if this is a new browser session
  const sessionKey = `session_${currentUser}`;
  if (sessionStorage.getItem(sessionKey)) {
    return; // Already counted this browser session
  }

  const users = JSON.parse(localStorage.getItem('factGeneratorUsers')) || {};
  const userData = users[currentUser];

  if (userData) {
    if (!userData.stats) {
      userData.stats = {
        factsGenerated: 0,
        totalTimeSpent: 0,
        sessionsCount: 0,
        categoryPreferences: {},
        firstVisit: userData.createdAt || new Date().toISOString()
      };
    }

    userData.stats.sessionsCount = (userData.stats.sessionsCount || 0) + 1;
    users[currentUser] = userData;
    localStorage.setItem('factGeneratorUsers', JSON.stringify(users));
    
    // Mark this browser session as counted
    sessionStorage.setItem(sessionKey, 'true');
  }
}

// Track time before page unload
window.addEventListener('beforeunload', trackTimeSpent);

// Track time every minute
setInterval(trackTimeSpent, 60000);

// Modal functionality
const authModal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');
const closeModal = document.querySelector('.close');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

function openModal() {
  authModal.style.display = 'flex';
}

function closeModalFunc() {
  authModal.style.display = 'none';
  clearForms();
}

function clearForms() {
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('signupUsername').value = '';
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPassword').value = '';
  document.getElementById('signupConfirmPassword').value = '';
}

function showLoginForm() {
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
}

function showSignupForm() {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
}

// Event listeners for auth buttons
loginBtn.addEventListener('click', () => {
  showLoginForm();
  openModal();
});

signupBtn.addEventListener('click', () => {
  showSignupForm();
  openModal();
});

logoutBtn.addEventListener('click', () => {
  auth.logout();
});

closeModal.addEventListener('click', closeModalFunc);

showSignup.addEventListener('click', (e) => {
  e.preventDefault();
  showSignupForm();
});

showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  showLoginForm();
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === authModal) {
    closeModalFunc();
  }
});

// Login form submission
document.getElementById('loginSubmit').addEventListener('click', () => {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!username || !password) {
    alert('Please fill in all fields');
    return;
  }

  try {
    auth.login(username, password);
    closeModalFunc();
    alert('Login successful!');
  } catch (error) {
    alert(error.message);
  }
});

// Signup form submission
document.getElementById('signupSubmit').addEventListener('click', () => {
  const username = document.getElementById('signupUsername').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;

  if (!username || !email || !password || !confirmPassword) {
    alert('Please fill in all fields');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  try {
    auth.register(username, email, password);
    auth.login(username, password);
    closeModalFunc();
    alert('Account created and logged in successfully!');
  } catch (error) {
    alert(error.message);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const icon = document.getElementById('mode-icon');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (icon) icon.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-mode');
    if (icon) icon.textContent = '🌙';
  }

  generateBtn.addEventListener('click', generateFact);
  
  // Start time tracking for logged-in users
  startTimeTracking();
  
  // Count session for logged-in users (once per browser session)
  incrementSessionCount();
});
