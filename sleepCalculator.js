const getSleepHours = day => {
  switch(day) {
    case "monday":
    return 8;
    case "tuesday":
    return 7;
    case "wednesday":
    return 8;
    case "thursday":
    return 6;
    case "friday":
    return 6;
    case "saturday":
    return 5;
    case "sunday":
    return 8;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

let getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log("You get the perfect amount of sleep.");
} else if (actualSleepHours > idealSleepHours) {
  console.log("You get more sleep than you needed.");
} else if (actualSleepHours < idealSleepHours) {
  console.log("You do not get enough sleep, get some rest.");
} else {
  console.log("Error, something went wrong");
}
};

calculateSleepDebt();