// programmatic API
var bower = require('bower');

bower.commands
    .search('backbone', {})
    .on('end', function(results) {
        console.log(results);
    });

bower.commands
    .install(['angular'], {save: true}, {})
    .on('end', function(installed) {
        console.log(installed);
    });

var inquirer = require('inquirer');

bower.commands
    .install(['jquery'], { save: true }, { interactive: true })
    .on('log', function(msg) {
        console.log(msg);
    })
    .on('prompt', function (prompts, callback) {
        inquirer.prompt(prompts, callback);
    });
