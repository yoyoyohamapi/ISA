module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: ['web/assets/**']
        },
        // 压缩CSS
        cssmin : {
            bundled:{
                files:[{
                    expand: true,
                    cwd: 'web/app/css',
                    src: '**/*.css',
                    dest: 'web/assets/css'
                }]
            }

        },
        // 压缩JS
        uglify : {
            modules: {
                // 压缩各个自定义模块js
                files: [{
                    expand: true,
                    cwd: 'web/app/js',
                    src: '**/*.js',
                    dest: 'web/assets/js'
                }]
            }
        },
        // 文件合并
        concat: {
            options: {
                stripBanners: true
            },
            css: {
                src: [
                    'web/assets/css/common.css',
                    'web/bower_components/semantic-ui/dist/semantic.min.css'
                ],
                dest: 'web/assets/css/production.css'
            }
        },
        // compass编译
        compass: {
            dist: {
                options: {
                    config: 'web/app/config.rb',
                    basePath: 'web/app'
                }
            }
        },
        // 监听文件变动
        watch :{
            module: {
              files: ['web/app/js/**/*.js'],
              tasks: ['uglify']
            },
            compass: {
                files: ['assets/sass/{,*/}*.scss'],
                tasks: ['compass', 'cssmin','concat']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['clean','compass','cssmin', 'uglify','concat']);
    grunt.registerTask('dev', ['clean','compass','cssmin', 'uglify','concat','watch']);
};