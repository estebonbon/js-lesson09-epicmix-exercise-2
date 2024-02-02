const epicMix = [
  // This is an array
  "Time to Pretend",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "I Put a Spell on You",
  "Call Me",
  "Paper Planes",
  "Jolene",
  "You Don't Own Me",
  "Fast Car",
  "Run the World (Girls)",
  "Superstition",
];

const mixList = document.querySelector(".mix"); // This is the UL element right underneath the paragraph.
const button = document.querySelector(".show-list"); // This is the button with the text "Show me"
const total = document.querySelector(".total"); // Paragrap below the h1

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li"); // creates an Li document
    li.classList.add("song"); // song is the placeholder in text
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`; // What the html statements look like
    mixList.append(li); // Telling it where in the html it will be added to.
  });
};
