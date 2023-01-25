import './style.css';

document.addEventListener("DOMContentLoaded", function() {
  const copyClass = "copy-content";
  let tags = document.getElementsByClassName(copyClass);
  let notification = document.createElement("div");
  notification.id = "copy-notification";
  document.body.appendChild(notification);
  for (let i = 0; i < tags.length; i++) {
    let tag = tags[i];
    tag.title = "Click to copy";
    tag.style.cursor = "pointer";
    tag.addEventListener("click", async function() {
      try {
        await navigator.clipboard.writeText(tag.innerHTML);
        notification.innerHTML = "Content Copied!";
        notification.classList.add("show");
        setTimeout(() => {
          notification.classList.remove("show");
        }, 3000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    });
  }
});