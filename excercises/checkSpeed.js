//Speed Limit is 70
// Every 5 above speed limit you get 1 point.
//Math.floor to convert from a floating integer
// More than 12 points license suspended
console.log(checkSpeed(130));

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    return "Ok";
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) return "License Suspended";

  return points;
}
