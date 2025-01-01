
// Gestion des mots-clés dynamiques
const keywords = ["Python", "SQL", "AutoML", "Big Data", "Storytelling"];
let index = 0;

function updateKeywords() {
  document.getElementById("dynamic-keywords").textContent = keywords[index];
  index = (index + 1) % keywords.length;
}
setInterval(updateKeywords, 2000);

// Mode sombre / clair
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
