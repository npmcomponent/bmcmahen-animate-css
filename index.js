var hasAnimations = require('eugenicsarchivesca-has-css-animations')
  , classes = require('component-classes')
  , cssEvent = require('ecarter-css-emitter')
  , once = require('component-once');

// API:
// animate(el, 'fadeOutRight', function(el){
//  $(el).remove();
// });

// If animations aren't supported, call back immediately,
// which allows us to immediately remove specific elements.

// One issue: If the browser supports animations, but an
// animation is called that doens't exist, things get
// screwed up because the callback is never invoked.
// Workarounds? Or maybe people should just fix their css...

module.exports = animate;

function animate(el, className, fn){
  if (!hasAnimations) {
    if (fn) fn(el);
    return;
  }
  var cls = classes(el);
  cls.add(className);
  cssEvent(el).bind(once(cleanup));
  function cleanup(){
    cls.remove(className);
    if (fn) fn(el);
  }
}