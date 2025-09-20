// Toggle availability label
const availabilityCheckbox = document.getElementById("availability");
const statusLabel = document.getElementById("statusLabel");

availabilityCheckbox.addEventListener("change", () => {
  statusLabel.textContent = availabilityCheckbox.checked ? "Online" : "Offline";
});

// Subject selection toggle
const subjectButtons = document.querySelectorAll(".subject");

subjectButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected");
  });
});

// Form submission
document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const selectedSubjects = Array.from(document.querySelectorAll(".subject.selected")).map(btn => btn.textContent);
  const profileData = {
    stream: document.getElementById("stream").value,
    semester: document.getElementById("semester").value,
    language: document.getElementById("language").value,
    availability: availabilityCheckbox.checked ? "Online" : "Offline",
    subjects: selectedSubjects
  };

  console.log("Profile Saved:", profileData);
  alert("Profile saved successfully!");
});