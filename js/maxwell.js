document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    audio.play().catch(error => {
        console.log("Autoodtwarzanie zablokowane, wymagane kliknięcie użytkownika");
    });
});