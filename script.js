"use strict";

document.querySelectorAll(".skill-card__toggle").forEach((toggle) => {
  const detailsId = toggle.getAttribute("aria-controls");
  const details = detailsId ? document.getElementById(detailsId) : null;

  if (!details) {
    throw new Error(`Skill card details not found for control: ${detailsId}`);
  }

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(expanded));
    toggle.textContent = expanded ? "Show less" : "More details";
    details.hidden = !expanded;
  });
});
