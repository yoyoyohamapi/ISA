define(['jquery', 'underscore', 'backbone', '/assets/js/' + app.action + '.js'], function($, _, Backbone, module) {
    return {
        init: function() {
            module.run();
        }
    }
});