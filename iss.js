/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 * - a callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *  - an error, if any (nullable)
 *  - the IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const message = `Status code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(error(message), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

module.exports = { fetchMyIP };