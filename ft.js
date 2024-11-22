
// Highlight the current day in the workout plan
function highlightCurrentDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const currentDay = days[today.getDay()];

    // Get all list items
    const workoutItems = document.querySelectorAll('#workout-list li');

    // Loop through and add class to the current day
    workoutItems.forEach(item => {
        if (item.getAttribute('data-day') === currentDay) {
            item.classList.add('current-day');
        }
    });
}

document.addEventListener('DOMContentLoaded', highlightCurrentDay);

