const leaderboardData = [
  { rank: 1, name: "A", score: 156, badge: "Community Hero" },
  { rank: 2, name: "B", score: 142, badge: "Knowledge Guru" },
  { rank: 3, name: "C", score: 138, badge: "Rising Star" },
  { rank: 4, name: "D", score: 124, badge: "Helper" },
  { rank: 5, name: "E", score: 119, badge: "Contributor" }
];

const improveTips = [
  { title: "Answer 3 questions today", description: "Help community members by providing thoughtful answers.", points: 15, completed: true },
  { title: "Get 5 upvotes on your answers", description: "Create high-quality content.", points: 25, completed: false, progress: 60 },
  { title: "Complete your profile", description: "Add a bio, skills, and profile picture.", points: 10, completed: false, progress: 80 },
  { title: "Post a helpful tutorial", description: "Share your knowledge.", points: 50, completed: false }
];

const leaderboardList = document.getElementById("leaderboard");
leaderboardData.forEach(entry => {
  const li = document.createElement("li");
  li.textContent = `#${entry.rank} ${entry.name} - ${entry.score} pts (${entry.badge})`;
  leaderboardList.appendChild(li);
});

const tipsList = document.getElementById("tips");
improveTips.forEach(tip => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${tip.title}</strong><br>${tip.description}<br>Points: ${tip.points}` +
    (tip.completed ? " ✅" : tip.progress ? ` - ${tip.progress}%` : "");
  tipsList.appendChild(li);

});
