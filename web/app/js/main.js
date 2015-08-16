require.config({
    baseUrl: '/bower_components/',
    paths: {
        jquery: 'jquery/dist/jquery.min',
        underscore: 'underscore/underscore-min',
        backbone: 'backbone/backbone-min',
        'semantic-ui': 'semantic-ui/dist/semantic',
    },
    packages: [

    ]
});

// 加载app，并运行
require(['/assets/js/app.js'], function(app) {
    app.init();
});