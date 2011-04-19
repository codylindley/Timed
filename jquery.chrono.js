/* 
 * jQuery Chrono plugin
 * by Arthur Klepchukov - arthur.klepchukov@gmail.com
 * Released under the BSD license (BSD_LICENSE.txt)
 */

(function($) {
  $.after = function() {
    return jQueryChrono.create_timer("after", arguments);
  };
  
  $.every = function() {
    return jQueryChrono.create_timer("every", arguments);
  }
})(jQuery);

// Testable namespace for helpers
var jQueryChrono = {
  defaults : {
    delay: 4, // https://developer.mozilla.org/en/window.setTimeout#Minimum_delay_and_timeout_nesting
    units: "milliseconds"
  },
  
  create_timer : function() { return null; }
}