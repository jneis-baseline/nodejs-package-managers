# bower-docs
bower cheatsheet

### install

  > npm install -g bower

### setup project

* initialize
  > `bower init`

* list files to ignore when installing
  > `bower.json`s `ignore`

### commands

* output JSON from any command result
  > `bower <command> --json`

* add/remove deps
  > `bower install --save <package>[#<version>]`

  > `bower install --save-dev`

  > `bower uninstall --save <package>`

* list local packages
  > `bower list [--paths]`

* prune extraneous packages
  > `bower prune`

* list cached packages
  > `bower cache list`

* clean cached packages
  > `bower cache clean`

  > `bower cache clean <package>[#<version>]`

### configuration

through `.bowerrc` file

* allow root user
  > `allow_root`

* installed packages dir
  > `directory`

* current working dir
  > `cwd`

* package registry url
  > `registry`

* proxy urls
  > `proxy`

  > `https-proxy`

* disable interactive installation mode
  > `interactive` (to 'false')

* hooks
  > `scripts` (object) 

  > `preinstall`

  > `postinstall`

  > `preuninstall`
