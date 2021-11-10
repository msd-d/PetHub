export function getAgeFromTime(birthDayTime) {
  let timeDiff = Date.now() - birthDayTime.getTime();

  // I really hope not this is going to last forever!
  // One magic number magics numbers everywhere!!!
  return new Date(timeDiff).getFullYear() - 1970;
}
