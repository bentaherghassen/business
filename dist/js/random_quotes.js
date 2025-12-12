
  // List of all 20 quotes
  const quotes = [
    "I don’t see with my eyes — I see with my ambition.",
    "Code has no limits. Neither do I.",
    "Accessibility isn’t an extra feature. It’s humanity written into software.",
    "Blindness didn’t stop me. Fear almost did.",
    "I build better because I understand barriers.",
    "Some people read code. I listen to it.",
    "My screen reader taught me one thing: focus on what matters.",
    "The only thing I can’t do is quit.",
    "Vision isn’t sight — it’s direction.",
    "When you remove visual noise, you discover clarity.",
    "I don’t need sight to see opportunities.",
    "Accessibility is not my limitation — it’s my superpower.",
    "If the world isn’t accessible, I will rebuild it.",
    "Being blind pushes me to code with empathy.",
    "Every bug is a puzzle, not a wall.",
    "I turned challenges into code, and code into freedom.",
    "The best UI is the one everyone can use — including me.",
    "I don’t want to be a developer who can see. I want to be one who understands.",
    "Limitations only exist when you accept them.",
    "My work is the same as my life: built step by step, key by key."
  ];

  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteBox = document.getElementById("quote-box");
    quoteBox.textContent = quotes[randomIndex];
  }

  // Display a quote when the page loads
  window.addEventListener("DOMContentLoaded", displayRandomQuote);

