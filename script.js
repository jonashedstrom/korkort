const state = {
  speed: 70,
  reaction: 1,
  friction: 0.8,
  surface: "Torr asfalt",
  mode: "simple",
};

const quiz = [
  {
    q: "Du kör i 50 km/h och har 1 sekunds reaktionstid. Ungefär hur lång blir reaktionssträckan med enkel metod?",
    a: ["5 meter", "15 meter", "25 meter", "50 meter"],
    correct: 1,
    why: "Stryk nollan: 50 blir 5. Räkna 5 × 1 × 3 = 15 meter.",
  },
  {
    q: "Vad händer med reaktionssträckan om du dubblar hastigheten?",
    a: ["Den blir dubbelt så lång", "Den blir fyra gånger längre", "Den påverkas inte", "Den blir hälften så lång"],
    correct: 0,
    why: "Reaktionssträckan ökar proportionerligt med hastigheten.",
  },
  {
    q: "Vad händer med bromssträckan om du dubblar hastigheten?",
    a: ["Den blir dubbelt så lång", "Den blir fyra gånger längre", "Den blir nio gånger längre", "Den påverkas inte"],
    correct: 1,
    why: "Bromssträckan ökar kvadratiskt. 2 × 2 = 4.",
  },
  {
    q: "Vad är stoppsträcka?",
    a: ["Bara bromssträckan", "Reaktionssträcka + bromssträcka", "Bara reaktionstiden", "Bilens längd + bromssträckan"],
    correct: 1,
    why: "Stoppsträckan är hela sträckan från upptäckt fara tills bilen står stilla.",
  },
  {
    q: "Du kör i 70 km/h. Vad blir bromssträckan ungefär på torr väg med enkel metod?",
    a: ["7 meter", "14 meter", "20 meter", "49 meter"],
    correct: 2,
    why: "70 blir 7. Räkna 7 × 7 × 0,4 = 19,6 meter, alltså ungefär 20 meter.",
  },
  {
    q: "Vilket påverkar reaktionssträckan direkt?",
    a: ["Däckens mönsterdjup", "Bilens färg", "Din reaktionstid", "Bromsarnas skick"],
    correct: 2,
    why: "Reaktionssträckan beror på hastighet och hur snabbt du reagerar.",
  },
  {
    q: "Vilket påverkar bromssträckan mest i en teorifråga om vinterväg?",
    a: ["Väglaget", "Din ålder", "Bilens radio", "Om du har solglasögon"],
    correct: 0,
    why: "Sämre grepp, till exempel is, kan göra bromssträckan mycket längre.",
  },
  {
    q: "Du kör i 90 km/h med 1 sekunds reaktionstid. Reaktionssträckan med enkel metod blir ungefär:",
    a: ["9 meter", "18 meter", "27 meter", "81 meter"],
    correct: 2,
    why: "90 blir 9. Räkna 9 × 1 × 3 = 27 meter.",
  },
  {
    q: "Du kör i 90 km/h på torr väg. Bromssträckan med enkel metod blir ungefär:",
    a: ["27 meter", "32 meter", "59 meter", "90 meter"],
    correct: 1,
    why: "90 blir 9. Räkna 9 × 9 × 0,4 = 32,4 meter.",
  },
  {
    q: "Du kör i 90 km/h, reaktionstid 1 sekund, torr väg. Stoppsträckan blir ungefär:",
    a: ["32 meter", "41 meter", "59 meter", "90 meter"],
    correct: 2,
    why: "Reaktion 27 meter + broms 32 meter = ungefär 59 meter.",
  },
  {
    q: "Varför är bromssträckan svår att räkna exakt?",
    a: ["För att reaktionstiden alltid är okänd", "För att väglag och däckgrepp varierar", "För att hastighet inte spelar roll", "För att stoppsträckan alltid är samma"],
    correct: 1,
    why: "Bromssträckan påverkas mycket av väglag, däck, last och bromsar.",
  },
  {
    q: "Vilket är bäst om du vill korta reaktionssträckan?",
    a: ["Köra fortare", "Vara förutseende och ha handlingsberedskap", "Ha mer last i bilen", "Välja isig väg"],
    correct: 1,
    why: "Om du förutser risker och är beredd hinner du agera tidigare.",
  },
  {
    q: "Vad kan göra reaktionssträckan längre?",
    a: ["Handlingsberedskap", "Bättre sikt", "Trötthet", "Lägre hastighet"],
    correct: 2,
    why: "Trötthet, alkohol, droger, mediciner och svåra val kan göra reaktionen långsammare.",
  },
  {
    q: "Du kör i 30 km/h med 1 sekunds reaktionstid. Reaktionssträckan med enkel metod blir ungefär:",
    a: ["3 meter", "9 meter", "12 meter", "30 meter"],
    correct: 1,
    why: "30 blir 3. Räkna 3 × 1 × 3 = 9 meter.",
  },
  {
    q: "Du kör i 30 km/h på torr väg. Bromssträckan med enkel metod blir ungefär:",
    a: ["3,6 meter", "9 meter", "12 meter", "30 meter"],
    correct: 0,
    why: "30 blir 3. Räkna 3 × 3 × 0,4 = 3,6 meter.",
  },
  {
    q: "Om hastigheten tredubblas, hur påverkas bromssträckan ungefär?",
    a: ["Den blir tre gånger längre", "Den blir sex gånger längre", "Den blir nio gånger längre", "Den påverkas inte"],
    correct: 2,
    why: "Bromssträckan ökar kvadratiskt. 3 × 3 = 9.",
  },
  {
    q: "Hur bred får bilen med last normalt vara?",
    a: ["220 cm", "240 cm", "260 cm", "300 cm"],
    correct: 2,
    why: "Maxbredden är normalt 260 cm inklusive last.",
  },
  {
    q: "Hur mycket får last sticka ut åt sidan utan att överskrida sidoregeln?",
    a: ["Max 10 cm per sida", "Max 20 cm per sida", "Max 50 cm per sida", "Det finns ingen gräns"],
    correct: 1,
    why: "Last får sticka ut max 20 cm på vardera sida.",
  },
  {
    q: "När ska last som sticker ut bakåt markeras?",
    a: "När den sticker ut mer än 1 meter bakåt|Alltid, även 5 cm|Aldrig på personbil|Bara på motorväg".split("|"),
    correct: 0,
    why: "Last som sticker ut mer än 1 meter bakåt ska markeras tydligt.",
  },
  {
    q: "Vilket påstående är bäst på provet?",
    a: ["Högre fart märks mest på bromssträckan", "Högre fart påverkar bara reaktionstiden", "Is påverkar inte stoppsträckan", "Stoppsträckan är alltid under 20 meter"],
    correct: 0,
    why: "Bromssträckan växer kvadratiskt, så den drar iväg snabbt när farten ökar.",
  },
];

const els = {
  speed: document.querySelector("#speed"),
  reaction: document.querySelector("#reaction"),
  speedValue: document.querySelector("#speedValue"),
  reactionValue: document.querySelector("#reactionValue"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSub: document.querySelector("#resultSub"),
  reactionMeters: document.querySelector("#reactionMeters"),
  brakingMeters: document.querySelector("#brakingMeters"),
  stopMeters: document.querySelector("#stopMeters"),
  reactionBar: document.querySelector("#reactionBar"),
  brakingBar: document.querySelector("#brakingBar"),
  stopBar: document.querySelector("#stopBar"),
  reactionMarker: document.querySelector("#reactionMarker"),
  stopMarker: document.querySelector("#stopMarker"),
  obstacle: document.querySelector("#obstacle"),
  midScale: document.querySelector("#midScale"),
  maxScale: document.querySelector("#maxScale"),
  reactionFormula: document.querySelector("#reactionFormula"),
  brakingFormula: document.querySelector("#brakingFormula"),
  stopFormula: document.querySelector("#stopFormula"),
  steps: document.querySelector("#steps"),
  stepList: document.querySelector("#stepList"),
  quizList: document.querySelector("#quizList"),
  scoreText: document.querySelector("#scoreText"),
};

function formatNumber(value, digits = 0) {
  return value.toLocaleString("sv-SE", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

function roundMeter(value) {
  return Math.round(value);
}

function calculate() {
  const speedBase = state.speed / 10;
  const reaction = state.mode === "simple"
    ? speedBase * state.reaction * 3
    : (state.speed * state.reaction) / 3.6;

  const braking = state.mode === "simple"
    ? speedBase * speedBase * 0.4 * (0.8 / state.friction)
    : (state.speed * state.speed) / (250 * state.friction);

  return {
    reaction,
    braking,
    stop: reaction + braking,
  };
}

function updateBars(values) {
  const max = Math.max(80, Math.ceil(values.stop / 20) * 20);
  const pct = (value) => `${Math.min(100, (value / max) * 100)}%`;

  els.reactionBar.style.width = pct(values.reaction);
  els.brakingBar.style.width = pct(values.braking);
  els.stopBar.style.width = pct(values.stop);
  els.reactionMarker.style.left = pct(values.reaction);
  els.stopMarker.style.left = pct(values.stop);
  els.obstacle.style.left = `${Math.min(92, Math.max(64, (values.stop / max) * 100 + 4))}%`;
  els.midScale.textContent = `${Math.round(max / 2)} m`;
  els.maxScale.textContent = `${max} m`;
}

function updateSteps(values) {
  const speedBase = state.speed / 10;
  const reactionFormula = state.mode === "simple"
    ? `${formatNumber(speedBase)} × ${formatNumber(state.reaction, 1)} × 3 = ${roundMeter(values.reaction)} m`
    : `(${state.speed} × ${formatNumber(state.reaction, 1)}) / 3,6 = ${formatNumber(values.reaction, 1)} m`;

  const brakingFormula = state.mode === "simple"
    ? `${formatNumber(speedBase)} × ${formatNumber(speedBase)} × 0,4 × väglag = ${roundMeter(values.braking)} m`
    : `${state.speed}² / (250 × ${formatNumber(state.friction, 1)}) = ${formatNumber(values.braking, 1)} m`;

  els.reactionFormula.textContent = reactionFormula;
  els.brakingFormula.textContent = brakingFormula;
  els.stopFormula.textContent = `${roundMeter(values.reaction)} + ${roundMeter(values.braking)} = ${roundMeter(values.stop)} m`;

  const items = [
    `Stryk sista siffran i hastigheten: ${state.speed} km/h blir ${formatNumber(speedBase)}.`,
    `Reaktionssträcka: ${reactionFormula}.`,
    `Bromssträcka: ${brakingFormula}.`,
    `Stoppsträcka: ${roundMeter(values.reaction)} + ${roundMeter(values.braking)} = ${roundMeter(values.stop)} meter.`,
  ];

  els.stepList.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function render() {
  const values = calculate();
  els.speedValue.textContent = state.speed;
  els.reactionValue.textContent = formatNumber(state.reaction, 1);
  els.resultTitle.textContent = `Sträckor vid ${state.speed} km/h`;
  els.resultSub.textContent = `${formatNumber(state.reaction, 1)} s reaktionstid · ${state.surface} · ${state.mode === "simple" ? "Enkel metod" : "Exakt metod"}`;
  els.reactionMeters.textContent = `${roundMeter(values.reaction)} m`;
  els.brakingMeters.textContent = `${roundMeter(values.braking)} m`;
  els.stopMeters.textContent = `${roundMeter(values.stop)} m`;
  updateBars(values);
  updateSteps(values);
}

function setMode(mode) {
  state.mode = mode;
  document.querySelector("#simpleMode").classList.toggle("selected", mode === "simple");
  document.querySelector("#exactMode").classList.toggle("selected", mode === "exact");
  render();
}

function buildQuiz() {
  els.quizList.innerHTML = quiz.map((item, index) => {
    const options = item.a.map((answer, answerIndex) => (
      `<button type="button" data-question="${index}" data-answer="${answerIndex}">${String.fromCharCode(65 + answerIndex)}. ${answer}</button>`
    )).join("");

    return `
      <article class="quiz-card" data-card="${index}">
        <h3>${index + 1}. ${item.q}</h3>
        <div class="quiz-options">${options}</div>
        <p class="feedback">${item.why}</p>
      </article>
    `;
  }).join("");
}

function checkQuiz() {
  let answered = 0;
  let correct = 0;

  quiz.forEach((item, index) => {
    const card = document.querySelector(`[data-card="${index}"]`);
    const buttons = [...card.querySelectorAll("button")];
    const selected = buttons.find((button) => button.classList.contains("selected"));
    const feedback = card.querySelector(".feedback");

    buttons.forEach((button, answerIndex) => {
      button.classList.remove("correct", "wrong");
      if (answerIndex === item.correct) button.classList.add("correct");
    });

    if (selected) {
      answered += 1;
      const selectedAnswer = Number(selected.dataset.answer);
      if (selectedAnswer === item.correct) {
        correct += 1;
      } else {
        selected.classList.add("wrong");
      }
    }

    feedback.classList.add("visible");
  });

  els.scoreText.textContent = `${correct} av ${quiz.length} rätt · ${answered} svarade`;
}

function clearQuiz() {
  document.querySelectorAll(".quiz-options button").forEach((button) => {
    button.classList.remove("selected", "correct", "wrong");
  });
  document.querySelectorAll(".feedback").forEach((feedback) => feedback.classList.remove("visible"));
  els.scoreText.textContent = `0 av ${quiz.length} rättade`;
}

els.speed.addEventListener("input", (event) => {
  state.speed = Number(event.target.value);
  render();
});

els.reaction.addEventListener("input", (event) => {
  state.reaction = Number(event.target.value);
  render();
});

document.querySelectorAll("#surfaceChoices button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("#surfaceChoices button").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    state.friction = Number(button.dataset.f);
    state.surface = button.dataset.label;
    render();
  });
});

document.querySelectorAll(".preset-row button").forEach((button) => {
  button.addEventListener("click", () => {
    state.speed = Number(button.dataset.speed);
    els.speed.value = state.speed;
    render();
  });
});

document.querySelector("#simpleMode").addEventListener("click", () => setMode("simple"));
document.querySelector("#exactMode").addEventListener("click", () => setMode("exact"));

document.querySelector("#resetBtn").addEventListener("click", () => {
  state.speed = 70;
  state.reaction = 1;
  state.friction = 0.8;
  state.surface = "Torr asfalt";
  state.mode = "simple";
  els.speed.value = 70;
  els.reaction.value = 1;
  document.querySelectorAll("#surfaceChoices button").forEach((button) => {
    button.classList.toggle("selected", button.dataset.label === "Torr asfalt");
  });
  setMode("simple");
});

document.querySelector("#explainBtn").addEventListener("click", () => {
  els.steps.classList.toggle("hidden");
});

document.querySelector("#quizList").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-question]");
  if (!button) return;
  const card = button.closest(".quiz-card");
  card.querySelectorAll("button").forEach((item) => item.classList.remove("selected", "correct", "wrong"));
  card.querySelector(".feedback").classList.remove("visible");
  button.classList.add("selected");
});

document.querySelector("#checkAll").addEventListener("click", checkQuiz);
document.querySelector("#clearQuiz").addEventListener("click", clearQuiz);

buildQuiz();
render();
