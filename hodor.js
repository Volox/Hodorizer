// Hodor hodor hodor, ...
var words = [
  'hodoor',
  'hodor',
  'h\u00F6-dor',
  'HODO\u00D6OR',
  'hodo-hodo'
];

// Hodorize(Hodor) -> hodor hodor.
function hodorize(node) {
  // if hodor -> hodor hodor hodor hooodor
  if (node.nodeType === Node.TEXT_NODE) {
    var text = node.textContent;
    // Hodor!! hodo-hodo hodor
    var hodor = text.replace(/\b(\w|-|\u00d6|\00f6){3,}\b/ig, function() {
      var idx = Math.floor(Math.random() * words.length);
      return words[idx];
    });
    // hodor
    node.textContent = hodor;
    return;
  } else if (node.nodeType === Node.ELEMENT_NODE) {
	
	if( node.nodeName==='IMG' )
	  node.src='http://volox.github.io/Hodorizer/images/hodor.png';
	if( node.nodeName==='A' )
	  node.href='http://www.youtube.com/watch?v=EiazMhG7ZM8';
    // hodo-hodor hodor
    for (var i = 0; i < node.childNodes.length; ++i) {
      // Hodorize hodor
      hodorize(node.childNodes[i]);
    }
    return;
  } else {
    // hodor??? hodor!
    return;
  }
}

hodorize(document.body);
