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
    "Owls can rotate their heads 270 degrees, thanks to extra neck vertebrae."
  ],
  animals_fish: [
    "Clownfish are all born male; some change to female later in life depending on social hierarchy.",
    "The lungfish can survive out of water for several years by burrowing underground.",
    "Electric eels can produce shocks up to 600 volts to stun prey or defend themselves."
  ],
  animals_reptiles: [
    "Some species of turtles can live for more than 100 years.",
    "Chameleons change color primarily to communicate, not just for camouflage.",
    "Crocodiles have the strongest bite force of any animal on Earth."
  ],
  food_italian: [
    "Pizza was originally a humble street food in Naples in the 18th century.",
    "Parmesan cheese is aged for at least 12 months, sometimes over 2 years.",
    "Espresso was invented in Italy in the early 20th century as a quick coffee brewing method."
  ],
  food_mexican: [
    "Chocolate was first cultivated by the ancient Maya and Aztecs and was originally consumed as a bitter drink.",
    "Corn (maize) was domesticated in Mexico over 7,000 years ago and remains a staple food.",
    "Tacos date back to indigenous people of the Valley of Mexico before the Spanish arrived."
  ],
  food_japanese: [
    "Sushi originated as a method of preserving fish in fermented rice, evolving over centuries into the delicacy we know.",
    "Matcha is powdered green tea traditionally used in Japanese tea ceremonies.",
    "Ramen was popularized in Japan after WWII but was inspired by Chinese noodle dishes."
  ],
  food_indian: [
    "Curry powder is a British invention; Indian cooking uses a wide variety of spices combined fresh for each dish.",
    "The tandoor oven, used for baking naan bread and cooking meats, dates back thousands of years.",
    "Chai tea combines black tea with spices and milk and is a daily ritual for millions in India."
  ],
  food_chinese: [
    "Soy sauce has been used in Chinese cuisine for over 2,500 years.",
    "Dim sum translates to 'touch the heart' and consists of small bite-sized portions traditionally served in tea houses.",
    "Chinese cuisine has eight culinary traditions, including Sichuan, Cantonese, and Shandong styles."
  ],
  technology_computers: [
    "The first programmable computer was the Z3, created by Konrad Zuse in 1941.",
    "The QWERTY keyboard layout was designed to prevent typewriter jams, not for typing efficiency.",
    "Moore's Law predicted that the number of transistors on a microchip would double approximately every two years."
  ],
  technology_internet: [
    "The first message sent over the internet was 'LO' — intended to be 'LOGIN' but the system crashed after the first two letters.",
    "Email was invented before the World Wide Web, in the early 1970s.",
    "The internet was originally developed as ARPANET, a military communication network."
  ],
  technology_smartphones: [
    "The first smartphone was IBM’s Simon, released in 1994 and included a touchscreen and apps.",
    "Smartphones today have more computing power than the computers used for the Apollo moon missions.",
    "The Android operating system is based on the Linux kernel."
  ],
};

// Select elements once
const topicSelect = document.getElementById('topicSelect');
const factDisplay = document.getElementById('factDisplay');
const generateBtn = document.getElementById('generateBtn');
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

function generateFact() {
  const selectedTopic = topicSelect.value;
  let factsArray = [];

  if (selectedTopic === 'any') {
    // Combine all facts into one array
    for (const key in factData) {
      factsArray = factsArray.concat(factData[key]);
    }
  } else {
    factsArray = factData[selectedTopic] || [];
  }

  if (factsArray.length === 0) {
    factDisplay.textContent = "Sorry, no facts found for this topic.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * factsArray.length);
  const fact = factsArray[randomIndex];
  factDisplay.textContent = fact;
}

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  // Change icon depending on mode
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
  } else {
    darkModeToggle.textContent = '🌙';
  }
}

// Event listeners
generateBtn.addEventListener('click', generateFact);
darkModeToggle.addEventListener('click', toggleDarkMode);
