/**
 * =============================================================================
 * ************   Drawer jQuery   ************
 * =============================================================================
 */

(function ($) {

  function Plugin(option) {
    var value;

    this.each(function () {
      var $this = $(this);
      var inst = $this.data('mdui.drawer');

      if (!inst) {
        $this.data('mdui.drawer', (inst = new mdui.Drawer(this, option)));
      }

      if (typeof option === 'string') {
        value = inst[option]();
      }
    });

    return typeof value === 'undefined' ? this : value;
  }

  var old = $.fn.mduiDrawer;

  $.fn.mduiDrawer = Plugin;

  // NO CONFLICT
  // ===========
  $.fn.mduiDrawer.noConflict = function () {
    $.fn.mduiDrawer = old;
    return this;
  };
})(jQuery);
