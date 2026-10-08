const schedule = ["wake up", "feed pets", "eat breakfast", "talk to mogo"];
schedule.splice(1, 0, "go for a walk with mogo");
console.log(schedule);

const user = {
  name: "earl",
  age: 3,
  location: "boston",
  species: "plant",

sayName: function() {
  console.log(this.name);
}
};
user.sayName();

function sayMySpecies() {
  console.log(this.species);
}
user.sayMySpecies();