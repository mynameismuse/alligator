function isJson (obj) {
  return typeof(obj) === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length
}

function isString (obj) {
  return typeof(obj) === "string"
}

module.exports = function (obj) {
  if (isString(obj)) {
    return encodeURIComponent(obj).toLowerCase()
  }

  if (isJson(obj)) {
    return encodeURIComponent(JSON.stringify(obj)).toLowerCase()
  }

  throw new Error("parameter must be a json object or a string")
}

/*
 * Todo, configuration allows to exampt null property in json object
 */