module.exports = function(grunt) {
    grunt.initConfig({
                
        concat: {                              // task config
            options: {                         // task-level options
            },

            foo: {                             // target config    
                options: {                     // target-level options                    
                },
                src: ['src/a.js', 'src/b.js'], // which files to operate (compact format)  
                dest: 'dest/c.js'

            },
            bar: {
                files: {                       // files obj format allows multiple files mapping
                    'dest/a.js': ['dest/aa.js', 'dest/aaa.js'], // dest: [srcs]
                    'dest/b.js': ['dest/bb.js', 'dest/bbb.js']
                }
            },
            sample: {                          // concatenate the given banner to matched files
                options: {                     // templates (<% %>) are automatically, recursively expanded
                    banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                src: ['<%= qux %>', 'baz/*.js'], // arbitrary props 'qux' and 'baz' defined below
                dest: 'build/<%= baz %>.js'
            }
        },

        jshint: {
            foo: {
                src: ['foo/{a,b}*.js', 'foo/**/{a,b}*.js', '!foo/ab.js'], // globbing (filename expansion)
                // any .js file in foo dir starting with a or b
                // any .js file in foo subdirs starting with a or b
                // except file ab.js in foo dir

                filter: function(filepath) {   // compact format allows additional props
                    return grunt.file.isDir(filepath);
                }
            }
        },

        uglify: {
            static_mappings: {
                files: [                       // files array format allows additional props
                    {src: 'lib/a.js', dest: 'build/a.min.js', filter: 'isFile'},
                    {src: 'lib/b.js', dest: 'build/b.min.js'},
                    {src: 'lib/subdir/c.js', dest: 'build/subdir/c.min.js'}
                ]
            },
            dynamic_mappings: {
                files: [{
                    expand: true,       // enable dynamic expansion
                    cwd: 'lib/',        // match source relative to path
                    src: ['**/*.js'],   // pattern
                    dest: 'build/',     // destination path prefix
                    ext: '.min.js',     // extension for destination files
                    extDot: 'first'     // extension in filenames begin after the first dot
                }]
            }            
        },

        // arbitrary non-task-specific props
        foo: 'c',
        bar: 'b<%= foo %>d',            // 'bcd'
        baz: 'a<%= bar %>e',            // 'abcde'
        qux: ['foo/*.js', 'bar/*.js'],

        // importing external props
        pkg: grunt.file.readJSON('package.json'),
        app: grunt.file.readYAML('app.yml')
    });

    // plugin load (enable plugin installed via npm)
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // default task(s)
    grunt.registerTask('default', ['concat']);
};
