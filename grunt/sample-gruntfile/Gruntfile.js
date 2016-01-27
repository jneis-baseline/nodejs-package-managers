module.exports = function(grunt) {
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        jshint: {
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            },
            files: ['Gruntfile.js', 'package.json', 'src/**/*.js', 'test/**/*.js']
        },

        qunit: {
            files: ['test/**/*.html']
        },

        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('default', ['concat', 'jshint', 'qunit', 'uglify']);

};
