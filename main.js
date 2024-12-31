// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const currentYear = document.getElementById('currentYear');
//     const nextYear = document.getElementById('nextYear');

//     setTimeout(() => {
//         currentYear.textContent = '2025'; // Update the years dynamically
//         nextYear.textContent = '2026';
//     }, 5000)
// });// script.js
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = document.getElementById('currentYear');
    const nextYear = document.getElementById('nextYear');
    const sparklesContainer = document.querySelector('.sparkles');

    const numSparkles = 50; // Number of sparkles
    for (let i = 0; i < numSparkles; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');
        spark.style.width = `${Math.random() * 3 + 1}px`; // Random size
        spark.style.height = spark.style.width;
        spark.style.left = `${Math.random() * 100}vw`; // Random position
        spark.style.top = `${Math.random() * 100}vh`;
        spark.style.animationDelay = `${Math.random()}s`; // Random animation delay
        sparklesContainer.appendChild(spark);
    }

    setTimeout(() => {
        currentYear.textContent = '2025';
        nextYear.textContent = '2026';
    }, 5000); // Update after 5 seconds
});