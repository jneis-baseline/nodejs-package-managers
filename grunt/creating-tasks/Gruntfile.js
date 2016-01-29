module.exports = function(grunt) {

	grunt.initConfig({

		// multitask:
		//    > grunt log:foo 	// 1, 2, 3
		//    > grunt log 		// 1, 2, 3 'Hello world' false
		log: {
			foo: [1, 2, 3],
			bar: 'Hello world',
			baz: false
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

};
