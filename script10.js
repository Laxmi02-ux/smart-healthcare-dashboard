// Show welcome alert on first visit
window.addEventListener("DOMContentLoaded", () => {
  alert("Welcome to the Smart Healthcare Dashboard! 💡📊");
  console.log("Dashboard loaded by Bulbul 💻");
});

// Add zoom effect on image hover (optional polish)
const dashboardImg = document.querySelector(".dashboard-img");
if (dashboardImg) {
  dashboardImg.addEventListener("mouseover", () => {
    dashboardImg.style.transform = "scale(1.02)";
    dashboardImg.style.transition = "transform 0.3s ease";
  });

  dashboardImg.addEventListener("mouseout", () => {
    dashboardImg.style.transform = "scale(1)";
  });
}
