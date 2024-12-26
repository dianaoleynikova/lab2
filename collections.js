const phoneBookArray = [
  { name: "Twilight Sparkle", phone: "+1000000000" },
  { name: "Pinkie Pie", phone: "+1222222222" },
  { name: "Diana Oleynikova", phone: "+380994817658" },
];
const phoneBookHash = {
  "Anna Duktry": "+1000000000",
  "Jane Canny": "+1222222222",
  "Diana Oleynikova": "+380994817658",
};

function findPhoneByNameArray(name) {
  for (const contact of phoneBookArray) {
    if (contact.name === name) {
      return contact.phone;
    }
  }
  return "Not found";
}

function findPhoneByNameHash(name) {
  return phoneBookHash[name] || "Not found";
}

// Приклади викликів
console.log("Пошук в масиві об'єктів:");
console.log(findPhoneByNameArray("Twilight Sparkle"));
console.log(findPhoneByNameArray("Unknown"));

console.log("\nПошук в хеш-таблиці:");
console.log(findPhoneByNameHash("Rainbow Dash"));
console.log(findPhoneByNameHash("Unknown"));
