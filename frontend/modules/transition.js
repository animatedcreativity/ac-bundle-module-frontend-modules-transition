exports = module.exports = exports = module.exports = function() {
  var mod = {
    remove: function(element) {
      element.className = element.className.split(" no-transition").join("");
    },
    start: function() {
      mod.remove(app.element);
    }
  };
  app.startUps.push(mod.start);
  return mod;
}