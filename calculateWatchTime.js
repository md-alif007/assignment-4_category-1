function calculateWatchTime(times) {

    for (const time of times) {
        if (typeof time !== "number") {
            return "Invalid"
        }
    }

    let total = 0;
    for (const time of times) {
        total += time;
    }

    let hour = Math.floor(total / 3600);
    let remainingTime = total % 3600;
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;

    return { hour, minutes, seconds };

}
