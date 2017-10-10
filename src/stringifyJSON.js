// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let emptyArr = [];
  let objArr = [];

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  }
  if (obj === null) {
    return String(null);  
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    if (!obj.length) {
      return '[' + ']';
    } else {
      for (let item of obj) {
        emptyArr.push(stringifyJSON(item));
      }
      return '[' + emptyArr + ']';
    }
  }
  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{' + '}';
    } else {
      for (let key in obj) {
        if (typeof obj[key] === 'function' || obj[key] === undefined) {
          continue;
        }
        objArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
      return '{' + objArr + '}';
    }
  }
  // if obj is num
  //   return string(num)
  // if obj is null
  //   return string(null)
  // if obj is boolean
  //   return string(boolean)
  // if obj is string 
  //   return '"' + obj + '"'
  // if obj is array
  //   if empty array
  //      return '[' + ']'
  //   else
  //     forEach element in obj 
  //       emptyArr.push(stringifyJSON(element))
  //     return '[' + emptyArr + ']'
  // if obj is an obj
  //   if empty obj
  //      return '{' + '}'
  //   else
  //     for (key in obj)
  //       irrelevant.push(key + ':' + stringifyJSON(obj[key]))
  //    return stringifyJSON(irrelevant)

};
