const currentDate = new Date();
const yearStart = new Date(currentDate.getFullYear(), 0, 1);
const timeDiff = currentDate.getTime() - yearStart.getTime();
const MS_IN_WK = 1000 * 60 * 60 * 24 * 7;
const weekNumber = Math.ceil(timeDiff / MS_IN_WK);

console.log(`Week of the year: ${weekNumber}`);
