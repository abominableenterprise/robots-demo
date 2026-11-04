const crew = document.querySelector(".crew");
const template = document.querySelector("#robot-card");

for (const robot of globalThis.robotRollCall.robots) {
  const card = template.content.firstElementChild.cloneNode(true);
  card.classList.add(robot.color);
  card.querySelector("h2").textContent = robot.name;
  card.querySelector(".job").textContent = robot.job;
  const button = card.querySelector("button");
  const speech = card.querySelector(".speech");
  let waveTimer;

  button.setAttribute("aria-label", `Say hi to ${robot.name}`);
  button.addEventListener("click", () => {
    speech.textContent = robot.greeting;
    card.classList.remove("waving");
    // Restart the wave even when a friend says hello twice in a row.
    void card.offsetWidth;
    card.classList.add("waving");
    clearTimeout(waveTimer);
    waveTimer = setTimeout(() => card.classList.remove("waving"), 900);
  });
  crew.append(card);
}
