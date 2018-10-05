module.exports = function(grunt) {

    var config = require('./.screeps.json')
    var branch = grunt.option('branch') || config.branch;
    var email = grunt.option('email') || config.email;
    var password = grunt.option('password') || config.password;
    var ptr = grunt.option('ptr') ? true : config.ptr

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: email,
                password: password,
                branch: branch,
                ptr: ptr
            }
        },
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        dist: {
            src: ['src/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};
