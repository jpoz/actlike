
ActLike = {};

ActLike.ATTR = "actlike";

ActLike.go = function() {

    var allElements = document.getElementsByTagName("*");
    var results     = [];

    var element;
    for (var i = 0; (element = allElements[i]) != null; i++) {

      var elementActLike = element.getAttribute(ActLike.ATTR);

      if (elementActLike) {
        var parts = elementActLike.split('.')

        var constr = window
        while (parts.length>0) {
          constr = constr[parts.shift()];
        }

        if (constr && constr !== window) {
          results.push(new constr(element));
        } else {
          throw("Could not find definition of " + elementActLike);
        }
      }

    }

    return results;

};

