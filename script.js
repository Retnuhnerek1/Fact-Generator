document.getElementById('factDisplay').textContent = facts[randomIndex] || "No facts available for this topic.";

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
    "Pizza was originally a peasant food in Naples and didn't have tomatoes until the 16th century when they were brought from the Americas.",
    "Pasta comes in over 350 different shapes, each designed to hold sauce differently. The word 'pasta' literally means 'paste' in Italian.",
    "Parmesan cheese takes at least 12 months to age, and the best varieties are aged for 24-36 months. Each wheel is tested by tapping with a hammer!"
  ],
  food_mexican: [
    "Chocolate was first consumed as a bitter drink by the Aztecs, who considered cacao beans so valuable they used them as currency.",
    "Vanilla is native to Mexico and was originally cultivated by the Totonac people. It's the second most expensive spice after saffron.",
    "Avocados are actually fruits, not vegetables, and Mexico produces about 30% of the world's avocados, mostly from the state of Michoacán."
  ],
  food_japanese: [
    "Sushi originally started as a way to preserve fish in fermented rice in Southeast Asia over 1,000 years ago.",
    "Japan has more Michelin-starred restaurants than any other country in the world, with Tokyo alone having more stars than Paris.",
    "Ramen noodles were actually invented in China but became so popular in Japan that many people think they originated there."
  ],
  food_indian: [
    "India is the world's largest producer and consumer of spices, using about 70% of its own spice production domestically.",
    "Curry powder as we know it doesn't exist in traditional Indian cooking—it's a British invention. Indians use individual spice blends called masalas.",
    "Tea (chai) is so integral to Indian culture that the country consumes 70% of its own tea production, making it both the largest producer and consumer of tea."
  ],
  food_chinese: [
    "Fortune cookies aren't actually Chinese—they were invented in California in the early 1900s by Japanese-American immigrants.",
    "China produces and consumes more rice than any other country, accounting for about 30% of global rice production.",
    "Chopsticks have been used in China for over 3,000 years and were originally used for cooking, not eating. The eating use came later!"
  ],
  technology_computers: [
    "The first computer bug was an actual bug—a moth trapped in a relay of Harvard's Mark II computer in 1947, found by Grace Hopper.",
    "Your smartphone has more computing power than the computers that guided Apollo 11 to the moon in 1969.",
    "The term 'byte' comes from 'bite' but was spelled differently to avoid confusion with 'bit.' A byte typically contains 8 bits."
  ],
  technology_internet: [
    "The first website ever created is still online at info.cern.ch, created by Tim Berners-Lee in 1990 at CERN.",
    "About 4.66 billion people use the internet worldwide, but over 90% of all data ever created was generated in just the last two years.",
    "The internet weighs approximately 50 grams—about the weight of a strawberry—if you could somehow weigh all the electrons in motion."
  ],
  technology_smartphones: [
    "The first smartphone was IBM's Simon Personal Communicator in 1994, featuring email, fax, and basic apps 13 years before the iPhone.",
    "There are more mobile phones than people on Earth—over 8 billion mobile subscriptions for about 7.8 billion people.",
    "The average smartphone contains more than 30 different elements from the periodic table, including gold, silver, and rare earth metals."
  ]
};

function generateFact() {
  const selectedTopic = document.getElementById('topicSelect').value;
  let facts = [];

  if (selectedTopic === "any") {
    for (const topic in factData) {
      facts = facts.concat(factData[topic]);
    }
  } else {
    facts = factData[selectedTopic] || [];
  }

  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').textContent =
    facts[randomIndex] || "No facts available for this topic.";
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);

  const toggle = document.getElementById('darkModeToggle');
  toggle.textContent = isDarkMode ? '☀️' : '🌙';
}


document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const iconSpan = document.getElementById("mode-icon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (iconSpan) iconSpan.textContent = "🌙";
  } else {
    document.body.classList.remove("dark-mode");
    if (iconSpan) iconSpan.textContent = "☀️";
  }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById("mode-icon");
  const isDark = body.classList.toggle("dark-mode");

  icon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

  // Optional: Save the theme preference
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.getElementById("mode-icon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (icon) icon.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    if (icon) icon.textContent = "🌙";
  }
});

