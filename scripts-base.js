function byId( elementId ){
  return document.getElementById(elementId);
}


function byclass(elementClass, atIndex){
  var elements = document.getElementsByClassName(elementClass);
  var telements = Array.prototype.slice.call(elements)
  return (atIndex !== null) ? tElements[atIndex] : tElements;
}

function byTag(elementTag){
  var elements = document.getElementsByTagName(elementTag);
  return Array.prototype.slice.call(elements);
}
