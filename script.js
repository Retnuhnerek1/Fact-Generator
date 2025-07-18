// All facts preserved exactly as you gave them
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

// Grab elements
const topicSelect = document.getElementById('topicSelect');
const generateBtn = document.getElementById('generateBtn');
const factDisplay = document.getElementById('factDisplay');
const darkModeToggle = document.getElementById('darkModeToggle');
const modeIcon = document.getElementById('mode-icon');

// Generate fact function
function generateFact() {
  const topic = topicSelect.value;

  let factsArray;

  if (topic === "any") {
    // Combine all facts into one big array for random pick
    factsArray = Object.values(factData).flat();
  } else {
    factsArray = factData[topic] || [];
  }

  if (factsArray.length === 0) {
    factDisplay.textContent = "No facts available for this topic.";
    return;
  }

  // Pick a random fact
  const fact = factsArray[Math.floor(Math.random() * factsArray.length)];
  factDisplay.textContent = fact;
}

// Dark mode toggle function
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    modeIcon.textContent = '☀️';  // sun icon in dark mode
  } else {
    modeIcon.textContent = '🌙';  // moon icon in light mode
  }
}

// Event listeners
generateBtn.addEventListener('click', generateFact);
darkModeToggle.addEventListener('click', toggleDarkMode);
