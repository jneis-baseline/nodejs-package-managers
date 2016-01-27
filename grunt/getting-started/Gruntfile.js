// grunt wrapper function
module.exports = function(grunt) {
    
    // project configuration
    grunt.initConfig({
        
        // import json metadata as <% %> template strings
        pkg: grunt.file.readJSON('package.json'),

        // 'uglify' task (from 'contrib-uglify' plugin)
        //    expects its config to be specified in a prop of same name
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

    // plugin load (enable plugin installed via npm)
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // default task(s)
    grunt.registerTask('default', ['uglify']);
};
