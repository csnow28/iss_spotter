/* const { fetchMyIP } = require('./iss');

 fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned IP:", ip);
});
*/

/* const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP(`${ip}`, (error, coordinates) => {
  if (error) {
    console.log("Error!", error);
    return;
  }
console.log("It worked, returned coordinates:", coordinates);
});
*/

/*
const { fetchISSFlyOverTiems } = require('./iss');

const exCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTiems(exCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned flyover times:", passTimes);
});*/

/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log(passTimes);
});