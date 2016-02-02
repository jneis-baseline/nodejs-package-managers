module.exports = function(grunt) {

	grunt.initConfig({

		// multitask:
		//    > grunt log:foo 	// 1, 2, 3
		//    > grunt log 		// 1, 2, 3 'Hello world' false
		log: {
			foo: [1, 2, 3],
			bar: 'Hello world',
			baz: false
		},

        fooattribdep: {
            config: 'abc'
        }
	});

	// task name, description, task function
	grunt.registerMultiTask('log', 'Log stuff', function() {
		grunt.log.writeln(this.target + ': ' + this.data);
	});

	// task args
	//    > grunt foo:a1:a2
	grunt.registerTask('foo', 'Sample task', function(arg1, arg2) {
		if (arguments.length === 0) {
			grunt.log.writeln(this.name + ', no args');
		} else {
			grunt.log.writeln(this.name + ', ' + arg1 + " " + arg2);
		}
	});

    // run tasks
    grunt.registerTask('bar', 'Bar task', function() {
        grunt.task.run('foo:a1:a2', 'log:foo');
    });

    // async tasks
    var doSomethingAsync = function(done) {
        setTimeout(function() {
            grunt.log.writeln('All done');
            done();
        }, 1000);
    };

    grunt.registerTask('baz', 'Baz task', function() {
        var done = this.async();
        grunt.log.writeln('Processing task...');
        doSomethingAsync(done);
    });

    // task errors
    grunt.registerTask('fooerr', 'Failing foo task', function() {
        return false;
    });

    // dependent tasks
    //    > grunt foo foodep
    grunt.registerTask('foodep', 'Dependent foo task', function() {
        grunt.task.requires('foo');
        grunt.log.writeln('Foo executed');
    });

    grunt.registerTask('fooattribdep', 'Required attributes', function(config) {
        grunt.config.requires('fooattribdep.config');
        grunt.log.writeln('Required attributes present');
    });    

};
