function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

const popoverSupported = supportsPopover();

if (popoverSupported) {
  popover.popover = "auto";
  toggleBtn.popoverTargetElement = popover;
  toggleBtn.popoverTargetAction = "toggle";

  document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
      popover.togglePopover();
    }
  });
} else {
  toggleBtn.style.display = "none";
}
