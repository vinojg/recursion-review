// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (!isNaN(json)) {
    return Number(json);
  }
  if (json.includes('true')) {
    return Boolean(1);
  }
  if (json.includes('false')) {
    return Boolean(0);  
  }
  // if (typeof json === 'string') {
  //   return json.slice(1, -1);
  // }
};
