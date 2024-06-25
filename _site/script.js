document.addEventListener("DOMContentLoaded", () => {
    const ratings = [
        { emoji: "😊", name: "Give us rating" },
        { emoji: "😞", name: "Very Poor" },
        { emoji: "😕", name: "Poor" },
        { emoji: "😐", name: "Good" },
        { emoji: "😀", name: "Very Good" },
        { emoji: "😍", name: "Excellent" }
    ];

    const ratingsContainer = document.getElementById("ratings");

    ratings.forEach((rating, index) => {
        const ratingElement = document.createElement("div");
        ratingElement.classList.add("rating");
        ratingElement.innerHTML = `
            <span class="emoji">${rating.emoji}</span>
            <span class="name">${rating.name}</span>
        `;
        ratingElement.addEventListener("click", () => {
            alert(`You selected: ${rating.name}`);
        });
        ratingsContainer.appendChild(ratingElement);
    });
});
