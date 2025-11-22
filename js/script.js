// Example: Smooth scroll or simple button alerts
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Thank you for connecting! We will reach out soon.");
    });
});

    const modal = document.getElementById("modal");
    const modalMedia = document.getElementById("modal-media");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".gallery-item").forEach(item => {
      item.addEventListener("click", () => {
        modal.style.display = "flex";
        modalMedia.innerHTML = "";

        const media = item.querySelector("img");
        if (media.tagName.toLowerCase() === "img") {
          const img = document.createElement("img");
          img.src = media.src;
          modalMedia.appendChild(img);
        }

        modalTitle.textContent = item.dataset.title;
        modalDesc.textContent = item.dataset.desc;
        modal.scrollTop = 0;
      });
    });

    function closeModal() {
      modal.style.display = "none";
      modalMedia.innerHTML = "";
    }

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", e => {
      if (e.target === modal) closeModal();
    });