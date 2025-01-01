
// Load Chart.js and initialize the radar chart for skills
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("skills-chart").getContext("2d");
  new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Python", "SQL", "Tableau", "Power BI", "MongoDB", "Git"],
      datasets: [{
        label: "Niveau de Maîtrise",
        data: [9, 8, 8, 7, 6, 8],
        backgroundColor: "rgba(108, 99, 255, 0.2)",
        borderColor: "#6c63ff",
        borderWidth: 2,
        pointBackgroundColor: "#6c63ff",
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Compétences Techniques"
        }
      },
      scales: {
        r: {
          beginAtZero: true,
        }
      }
    }
  });
});
