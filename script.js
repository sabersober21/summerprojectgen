const summerProjects = [
    { title: "Screentime Shock Therapy", description: "An app that jump-scares you whenever you exceed 3 hours of doom-scrolling." },
    { title: "Therapy Bingo", description: "A game where you mark off mental health red flags you catch yourself saying and win free counseling sessions." },
    { title: "Anti-Gaslighting Glasses", description: "Smart glasses that display objective reality so no one can manipulate you into thinking you're overreacting." },
    { title: "Social Recharge Retreats", description: "Summer camps where introverts and extroverts swap roles for a week to understand each other better." },
    { title: "Cry Club", description: "A safe space where people can gather in public parks and cry together while hydration stations provide free electrolyte water." },
    { title: "Sleep Debt Collectors", description: "A service where trained professionals show up at your door and force you to take a nap if you haven’t slept enough." },
    { title: "CoughCloud", description: "A public database where users report where they last saw someone cough without covering their mouth." },
    { title: "FluTag", description: "A game where players must avoid getting tagged by someone pretending to have a cold, simulating real-world disease spread." },
    { title: "Antisocial Hand Sanitizer", description: "A spray that smells bad enough to keep people six feet away." },
    { title: "SpitShield", description: "A fashionable face mask that auto-activates whenever you get too close to a known loud talker." },
    { title: "Public Bathroom Yelp", description: "A review app for public restrooms, ranking them by cleanliness and probability of contracting food poisoning." },
    { title: "Cough Whisperer", description: "An AI-powered device that analyzes your cough and gives you a sarcastic health diagnosis." },
    { title: "Sweatcoin 2.0", description: "A cryptocurrency that rewards you based on how much you sweat during summer workouts." },
    { title: "The Stairway to Health", description: "An escalator that plays an embarrassing personal recording if you take it instead of the stairs." },
    { title: "FidgetGym", description: "A gym for people with short attention spans, where workouts change every 30 seconds." },
    { title: "Public Bench Press", description: "Outdoor park benches that convert into workout stations, guilt-tripping you into exercising while you sit." },
    { title: "Dodge the UV", description: "A city-wide summer game where people must avoid the sun’s strongest UV rays using only shade and sunscreen." },
    { title: "The 10,000-Step Concert", description: "A music festival where you can only unlock VIP sections by walking a certain number of steps." },
    { title: "Spicy Water", description: "A campaign to make hydration exciting by adding cayenne pepper to bottled water." },
    { title: "Smoothie Roulette", description: "A vending machine that randomly generates smoothie ingredients based on your daily vitamin deficiencies." },
    { title: "AI Meal Shamer", description: "An app that sarcastically roasts you whenever you eat something ultra-processed." },
    { title: "Dehydration Detector", description: "A smart bracelet that changes colour when you’re overdue for a drink of water." },
    { title: "Eat the Rainbow", description: "A daily challenge where you must eat at least five different-coloured foods, encouraging balanced nutrition." },
    { title: "Gum That Guilt-Trips You", description: "A chewing gum that reminds you to floss every time you chew." },
    { title: "Shade Maps", description: "An interactive city map showing the best shaded walking routes to avoid heat exhaustion." },
    { title: "Sweat-o-Meter", description: "A wearable that estimates how much sweat you’ve lost and warns you to rehydrate." },
    { title: "Sunscreen Sprinklers", description: "Park sprinklers that spray mist mixed with SPF 50." },
    { title: "Urban Igloos", description: "Pop-up cooling stations designed to look like igloos, complete with free ice packs and cooling towels." },
    { title: "The Solar-Powered Ice Cream Truck", description: "A mobile public health project where ice cream is only given to people who apply sunscreen on-site." },
    { title: "Flip-Flop Foot Patrol", description: "A team that monitors beaches and hands out free sandals to prevent foot burns on hot sand." },
    { title: "Mosquito Avoidance Training", description: "A virtual reality game that teaches the best movements to avoid mosquito bites." },
    { title: "Sunscreen Art", description: "A community project where people apply sunscreen in creative patterns to make UV-sensitive artwork." },
    { title: "Hydration Karaoke", description: "A water-drinking challenge where you have to chug water before singing, making hydration fun and ridiculous." },
    { title: "Public Health Escape Room", description: "A puzzle-based escape room that teaches public health principles while players try to 'contain an outbreak'." }
];

const investmentAmounts = [
    "One peso", "One Indian Rupee", "Yes mama", "Similar to net worth of Elon Musk", "Thousands of healthy goats", "Time is money", "500k", "Tesco Meal Deal worth", "Your mum", "Your tube fare equivalent", "69 bucks", "Who's asking?", "Who are you? SEC?", "Who are you underpaid WHO worker?", "Is that you Alexanderrrrr?", "CID is the best course in LSHTM", "IDR what I wrote last time", "Do you even want to do summer project?", "I'll go bankrupt", "Don't ask, Don't Tell", "You cannot serve God and money - Matthew 6:24", "Negotiable", "A fat bag", "To the moon", "Numbers go up", "$1T", "I don't think you could do this", "Depends", "Not important", "Fuck if I know", "One Dogecoin", "Your hopes and dreams", "Whatever's left after rent", "Two shillings and a button", "Enough to make Jeff Bezos blink", "The energy of the universe", "A mysterious benefactor's cheque", "A crisp tenner" 
];

function getRandomProject() {
    const randomIndex = Math.floor(Math.random() * summerProjects.length);
    const project = summerProjects[randomIndex];
    document.getElementById("idea-title").textContent = project.title;
    document.getElementById("idea-description").textContent = project.description;
}

function getRandomInvestment() {
    const randomIndex = Math.floor(Math.random() * investmentAmounts.length);
    document.getElementById("investment-amount").textContent = investmentAmounts[randomIndex];
}

document.getElementById("generate-btn").addEventListener("click", () => {
    getRandomProject();
    getRandomInvestment();
});
