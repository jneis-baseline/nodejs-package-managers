# grunt-docs
grunt cheatsheet

### setup

* cli
  > `npm install -g grunt-cli`

* grunt core
  > `npm install --save-dev grunt`

* grunt plugins
  > `npm install --save-dev grunt-contrib-uglify`

* list available tasks
  > `grunt --help`

* specify alternative Gruntfile
  > `grunt --gruntfile <path> <command>`

### config

* tasks vs targets
  > `grunt <task>`

  > `grunt <task>:<target>`

* templates
  > `<%= <prop.subprop> %>`

  > `<%= grunt.template.today("yyyy-mm-dd") %>`

* import
  > `grunt.file.readYAML(filepath)`

  > `grunt.file.readJSON(filepath)`

* globbing patterns  
  > `*` any number of chars but `/`

  > `?` any single char but `/`

  > `**` any number of chars, (including `/`)

  > `{}` comma-separated list of 'or' expressions

  > `!` negate the match

### task impl

* accessing task attributes
  > `this.name`, `this.target`, `this.data`
