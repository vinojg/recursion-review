// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // Array to store results
  // Func with node as input
  //   Check if node has className
  //     If so push to array        
  //   Check if node has a length
  //     If so call func
  // Call func on document.body


  let results = [];

  let searchNodes = function(node) {
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }
    let children = node.childNodes;

    if (children.length) {
      for (let i = 0; i < children.length; i++) {
        searchNodes(children[i]);
      }
    }
  };

  searchNodes(document.body);
  return results;

};
