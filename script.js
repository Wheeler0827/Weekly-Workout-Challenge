const workouts = {
    "Day 1": {
        title: "Legs and Abs + HIIT",
        details: `
            <h3>Legs:</h3>
            <ul>
                <li>Dumbbell Squats: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Leg Raises: 15 reps</li>
            </ul>
            <h3>Abs:</h3>
            <ul>
                <li>Dumbbell Lunges: 15, 12, 8, 4 (each leg, with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Plank: Hold for 45 seconds</li>
            </ul>
            <h3>HIIT:</h3>
            <ul>
                <li>Dumbbell Romanian Deadlifts: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Bicycle Crunches: 15 reps each side</li>
            </ul>
            <h3>HIIT Session:</h3>
            <ul>
                <li>Burpees: Perform 10 burpees, then rest for 30 seconds. Repeat for 10-15 minutes.</li>
            </ul>
        `
    },
    "Day 2": {
        title: "Chest and Abs",
        details: `
            <h3>Chest:</h3>
            <ul>
                <li>Dumbbell Bench Press: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Sit-Ups: 15 reps</li>
            </ul>
            <h3>Abs:</h3>
            <ul>
                <li>Dumbbell Flyes: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Russian Twists: 15 reps each side</li>
            </ul>
            <h3>Abs:</h3>
            <ul>
                <li>Push-Ups: 15, 12, 8, 4</li>
                <li>Leg Raises: 15 reps</li>
            </ul>
        `
    },
    "Day 3": {
        title: "Back and Abs",
        details: `
            <h3>Back:</h3>
            <ul>
                <li>Dumbbell Bent Over Rows: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Crunches: 20 reps</li>
            </ul>
            <h3>Back:</h3>
            <ul>
                <li>Dumbbell Deadlifts: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Reverse Crunches: 15 reps</li>
            </ul>
            <h3>Back:</h3>
            <ul>
                <li>Dumbbell Pullovers: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Mountain Climbers: 15 reps each side</li>
            </ul>
        `
    },
    "Day 4": {
        title: "Rest Day",
        details: `<p>Enjoy your rest day!</p>`
    },
    "Day 5": {
        title: "Shoulders + HIIT",
        details: `
            <h3>Shoulders:</h3>
            <ul>
                <li>Dumbbell Shoulder Press: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Lateral Raises: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Front Raises: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
                <li>Upright Rows: 15, 12, 8, 4 (with drop set to 50% weight until failure on the last set of 4)</li>
            </ul>
            <h3>HIIT Session:</h3>
            <ul>
                <li>Burpees: Perform 10 burpees, then rest for 30 seconds. Repeat for 10-15 minutes.</li>
            </ul>
        `
    },
    "Day 6": {
        title: "Abs",
        details: `
            <h3>Abs:</h3>
            <ul>
                <li>Leg Raises: 15 reps</li>
                <li>Russian Twists: 15 reps each side</li>
                <li>Plank: Hold for 45 seconds</li>
                <li>Mountain Climbers: 30 reps total</li>
                <li>Crunches: 20 reps</li>
                <li>Heel Touches: 15 reps each side</li>
            </ul>
        `
    },
    "Day 7": {
        title: "HIIT Session",
        details: `
            <h3>HIIT:</h3>
            <ul>
                <li>Burpees: Perform 10 burpees, then rest for 30 seconds. Repeat for 10-15 minutes.</li>
            </ul>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const calendars = [document.getElementById('calendar1'), document.getElementById('calendar2'), document.getElementById('calendar3')];
    const workoutContainer = document.getElementById('workoutContainer');
    const workoutTitle = document.getElementById('workoutTitle');
    const workoutDetails = document.getElementById('workoutDetails');
    const finishWorkoutButton = document.getElementById('finishWorkoutButton');

    function createCalendar(calendar) {
        for (let i = 1; i <= 28; i++) {
            const day = document.createElement('div');
            day.innerText = i;
            day.setAttribute('data-day', (i - 1) % 7 + 1);
            day.addEventListener('click', () => showWorkout(day));
            calendar.appendChild(day);
        }
    }

    function showWorkout(dayElement) {
        const dayNumber = dayElement.getAttribute('data-day');
        const workout = workouts[`Day ${dayNumber}`];
        if (workout) {
            workoutTitle.innerText = workout.title;
            workoutDetails.innerHTML = workout.details;
            workoutContainer.style.display = 'block';
            finishWorkoutButton.setAttribute('data-day', dayElement.innerText);
        }
    }

    function finishWorkout() {
        const dayNumber = finishWorkoutButton.getAttribute('data-day');
        const dayElement = Array.from(document.querySelectorAll('.calendar div')).find(day => day.innerText === dayNumber);
        if (dayElement) {
            dayElement.classList.add('completed');
            workoutContainer.style.display = 'none';
        }
    }

    finishWorkoutButton.addEventListener('click', finishWorkout);
    calendars.forEach(createCalendar);
});
