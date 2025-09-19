const peers = [/* paste your mockPeers array here, same as in your React code */];

const searchInput = document.getElementById("searchInput");
const streamFilter = document.getElementById("streamFilter");
const semesterFilter = document.getElementById("semesterFilter");
const subjectFilter = document.getElementById("subjectFilter");
const languageFilter = document.getElementById("languageFilter");
const peerGrid = document.getElementById("peerGrid");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");

function renderPeers() {
  const query = searchInput.value.toLowerCase();
  const stream = streamFilter.value;
  const semester = semesterFilter.value;
  const subject = subjectFilter.value;
  const language = languageFilter.value;

  const filtered = peers.filter(peer => {
    const matchesSearch =
      peer.name.toLowerCase().includes(query) ||
      peer.stream.toLowerCase().includes(query) ||
      peer.subjects.some(s => s.toLowerCase().includes(query));

    const matchesStream = stream === "all" || peer.stream === stream;
    const matchesSemester = semester === "all" || peer.semester === semester;
    const matchesSubject = subject === "all" || peer.subjects.includes(subject);
    const matchesLanguage = language === "all" || peer.language === language;

    return matchesSearch && matchesStream && matchesSemester && matchesSubject && matchesLanguage;
  });

  peerGrid.innerHTML = "";
  resultsCount.textContent = `${filtered.length} peer${filtered.length !== 1 ? "s" : ""} found`;

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  filtered.forEach(peer => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${peer.avatar}" alt="${peer.name}" />
      <h3>${peer.name}</h3>
      <p>${peer.stream} – ${peer.semester}</p>
      <p>Subjects: ${peer.subjects.join(", ")}</p>
      <p>Language: ${peer.language}</p>
      <p>Rating: ⭐ ${peer.rating}</p>
      <button onclick="alert('Session request sent to ${peer.name}!')">Request Session</button>
    `;
    peerGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", renderPeers);
streamFilter.addEventListener("change", renderPeers);
semesterFilter.addEventListener("change", renderPeers);
subjectFilter.addEventListener("change", renderPeers);
languageFilter.addEventListener("change", renderPeers);

renderPeers();