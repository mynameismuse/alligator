/*
 * Check if parameter is an json object
 */
function isJson (obj) {
  var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length
  return isjson
}

/*
 * Encode a json object to an urlencode object
 */
module.exports = function (obj) {
  if (!isJson(obj)) {
    throw new Error("param must be a json object")
  }

  return encodeURIComponent(JSON.stringify(obj))
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A')
    .replace(/%20/g, '+')
};