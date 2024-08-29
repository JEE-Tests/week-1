// script.js
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".question-checkbox");
    const countdownElement = document.getElementById("countdown");
    const deadline = new Date("September 04, 2024 23:59:59").getTime();

    // Load saved data
    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = localStorage.getItem(`checkbox${index}`) === "true";
        checkbox.addEventListener("change", function () {
            localStorage.setItem(`checkbox${index}`, checkbox.checked);
        });
    });

    // Timer function
    function updateTimer() {
        const now = new Date().getTime();
        const distance = deadline - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            countdownElement.innerHTML = "EXPIRED";
        }
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);
});
