function fn() {
  const constObject = { name: "Diana" };
  let varObject = { name: "Oleynikova" };

  constObject.name = "Jennifer";
  varObject.name = "Check";

  varObject = { name: "Changed" };

  console.log(constObject, varObject);
}

function createUser(name, city) {
  return { name, city };
}

fn();
console.log(createUser("Twilight Sparkle", "Ukraine"));
