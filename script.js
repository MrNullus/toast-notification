const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerHTML = `<h2>I love you!!!</h2>`;

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 800);
}