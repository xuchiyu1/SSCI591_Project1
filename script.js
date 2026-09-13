// Visible string: two versions of the intro text
let shortIntro = "AI/ML engineer with an ECE background who builds end-to-end — from sensor hardware, to data pipelines, to trained models.";
let longIntro = "AI/ML engineer with an ECE background who builds end-to-end — from sensor hardware, to data pipelines, to trained models. I understand a system from the device that generates the data, to the pipeline that stores it, to the model that learns from it — a full-chain view most software-only candidates don't have.";

let showingLong = false;

// One simple function: toggles the intro paragraph between short and long text
function toggleIntro() {
  const introText = document.getElementById("introText");
  const toggleBtn = document.getElementById("toggleBtn");

  if (showingLong) {
    introText.textContent = shortIntro;
    toggleBtn.textContent = "Read More";
  } else {
    introText.textContent = longIntro;
    toggleBtn.textContent = "Show Less";
  }

  showingLong = !showingLong;
}

// One event listener: button click calls the function above
document.getElementById("toggleBtn").addEventListener("click", toggleIntro);

// Day.js: display the current date and time on page load
document.getElementById("dateTime").textContent = dayjs().format("MMMM D, YYYY, h:mm A");
