
ActLike = {};

ActLike.CONST = "actlike";
ActLike.ATTR  = "iam"

ActLike.go = function() {
    var allElements, results;

    if (typeof document.querySelectorAll === 'function') {
      allElements = document.querySelectorAll("*["+ActLike.CONST+"]");
    } else {
      allElements = document.getElementsByTagName("*");
    }
    results = [];

    var element;
    for (var i = 0; (element = allElements[i]) != null; i++) {

      var elementActLike = element.getAttribute(ActLike.CONST);

      if (elementActLike) {
        var parts = elementActLike.split('.')

        var constr = window
        while (parts.length>0) {
          constr = constr[parts.shift()];
        }

        if (constr && constr !== window) {
          ActLike.attach(element);
          results.push(new constr(element));
          delete element[ActLike.CONST];
        } else {
          throw("Could not find definition of " + elementActLike);
        }
      }

    }

    return results;

};

ActLike.attach = function(element) {
  var subElements;

  if (typeof element.querySelectorAll === 'function') {
    subElements = element.querySelectorAll("*["+ActLike.ATTR+"]");
  } else {
    subElements = element.getElementsByTagName("*");
  }

  var subElement;
  for (var i = 0; (subElement = subElements[i]) != null; i++) {

    var elementIam = subElement.getAttribute(ActLike.ATTR);

    if (elementIam) {
      var parts = elementIam.split('.');

      var node = element;
      while (parts.length>1) {
        var key = parts.shift();
        node[key] = node[key] || {};
        node = node[key];
      }
      node[parts.shift()] = subElement;

    }

  }

}
