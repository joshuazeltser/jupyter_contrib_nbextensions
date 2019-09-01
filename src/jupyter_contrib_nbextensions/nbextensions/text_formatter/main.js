define([
    'base/js/namespace',
    'jquery',
], function(Jupyter, $) {
    "use strict";

    var bold = false;
    var italic = false;
    var underline = false;

    function toggle_bold () {
        bold = !bold;
        bold ? $('.CodeMirror-code').css("font-weight", "Bold") : $('.CodeMirror-code').css("font-weight","normal");
    }

    function toggle_italic () {
        italic = !italic;
        italic ? $('.CodeMirror-code').css("font-style", "italic") : $('.CodeMirror-code').css("font-style","normal");
    }

    function toggle_underline () {
        underline = !underline;
        underline ? $('.CodeMirror-code').css("text-decoration", "underline") :
            $('.CodeMirror-code').css("text-decoration","none");
    }

    var load_extension = function() {
        Jupyter.toolbar.add_buttons_group([
            Jupyter.keyboard_manager.actions.register ({
                'help'   : 'Make text bold',
                'icon'   : 'fa-bold',
                'handler': function () {
                    toggle_bold();
                }
            }, 'text-bold', 'bold'),
            Jupyter.keyboard_manager.actions.register ({
                'help'   : 'Make text italic',
                'icon'   : 'fa-italic',
                'handler': function () {
                    toggle_italic();
                }
            }, 'text-italic', 'italic'),
            Jupyter.keyboard_manager.actions.register ({
                'help'   : 'Make text underlined',
                'icon'   : 'fa-underline',
                'handler': function () {
                    toggle_underline();
                }
            }, 'text-underline', 'underline'),
        ]);
    };

    var extension = {
        // load_jupyter_extension : load_extension,
        load_ipython_extension : load_extension
    };
    return extension;
});
