module.exports = function(grunt) {

    grunt.initConfig({
        new_plugin: {
            files: {
                'build/*.js': ['src/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-new-plugin');

    grunt.registerTask('default', ['new_plugin']);

};
