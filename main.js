document.addEventListener("DOMContentLoaded", () => {

  const next2 = document.getElementById("next2");
  const next4 = document.getElementById("next4");
  const restart = document.getElementById("restart");

  const section2 = document.getElementById("section2");
  const section3 = document.getElementById("section3");
  const section4 = document.getElementById("section4");
  const section5 = document.getElementById("section5");
  const section6 = document.getElementById("section6");

  const receiverId = document.getElementById("receiverId");
  const searchUsername = document.getElementById("searchUsername");

  const spinner = document.getElementById("spinner");
  const checkmark = document.getElementById("checkmark");

  const loadingFill = document.getElementById("loadingFill");
  const finalMessage = document.getElementById("finalMessage");
  const finalImage = document.getElementById("finalImage");

  let selectedAmount = null;

  // Paso 2
  next2.addEventListener("click", () => {
    const id = receiverId.value.trim();
    const platform = document.querySelector("input[name='platform']:checked");

    if (!id || !platform) return alert("You must enter the ID and select a platform.");

    searchUsername.textContent = `Player: ${id}`;
    section2.style.display = "none";
    section3.style.display = "block";

    spinner.style.display = "block";
    checkmark.style.display = "none";

    setTimeout(() => {
      spinner.style.display = "none";
      checkmark.style.display = "block";

      setTimeout(() => {
        section3.style.display = "none";
        section4.style.display = "block";
      }, 1000);
    }, 2000);
  });

  document.querySelectorAll(".platforms label").forEach(label => {
    label.addEventListener("click", () => {
      document.querySelectorAll(".platforms label").forEach(l => l.classList.remove("selected"));
      label.classList.add("selected");
      label.querySelector("input").checked = true;
    });
  });

  document.querySelectorAll(".options label").forEach(label => {
    label.addEventListener("click", () => {
      document.querySelectorAll(".options label").forEach(l => l.classList.remove("selected"));
      label.classList.add("selected");
      selectedAmount = label.getAttribute("data-amount");
      label.querySelector("input").checked = true;
    });
  });

  next4.addEventListener("click", () => {
    if (!selectedAmount) return alert("You must select an amount.");

    section4.style.display = "none";
    section5.style.display = "block";
    let progress = 0;

    loadingFill.style.width = "0%";

    const interval = setInterval(() => {
      progress += 10;
      loadingFill.style.width = progress + "%";

      if (progress >= 100) {
        clearInterval(interval);

        section5.style.display = "none";
        section6.style.display = "block";

        const user = receiverId.value.trim();

        if (selectedAmount === "100000") {
          finalMessage.textContent = "You will receive Admin of Efootball";
          finalImage.src = "admin.png";
        } else {
          finalMessage.innerHTML = `<span>${selectedAmount}</span> Coins have been sent to <span>${user}</span>`;
          finalImage.src = "https://hilecifare.com/efootball-para-hilesi/images/coins.webp";
        }
      }

    }, 300);
  });

  restart.addEventListener("click", () => {
    window.location.reload();
  });

});
