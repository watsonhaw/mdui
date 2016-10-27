/**
 * =============================================================================
 * ************   Dialog jQuery   ************
 * =============================================================================
 */

(function ($) {

  function Plugin(option) {
    var value;

    this.each(function () {
      var $this = $(this);
      var inst = $this.data('mdui.dialog');

      if (!inst) {
        $this.data('mdui.dialog', (inst = new mdui.Dialog(this, option)));
      }

      if (typeof option === 'string') {
        value = inst[option]();
      }
    });

    return typeof value === 'undefined' ? this : value;
  }

  var old = $.fn.mduiDialog;

  $.fn.mduiDialog = Plugin;

  // NO CONFLICT
  // ===========
  $.fn.mduiDialog.noConflict = function () {
    $.fn.mduiDialog = old;
    return this;
  };
})(jQuery);
