# npm-docs
further exploring npm

### npm cli cheatsheet

* config listing
  > `npm config ls`

* project setup
  > `npm init`

* deps setup
  > `npm install` <dep> `--save`

  > `npm install` <dep> `--save-dev`
  
  > `npm install <dep>@<version>`

  > `npm uninstall` <dep> `--save`

* deps listing
  > `npm ls`

* deps cleanup
  > `npm prune`

* deps version mgmt
  > `npm outdated`

  > `npm update`

* script listing
  > `npm run`

* (custom) script running
  > `npm [run]` <script>

* default scripts
  > `install`, `test`, `start`, `stop`, `restart`, `publish`

  > `pre`, `post`

* default script values
  > `npm [run] start [server.js]`

### semver cheatsheet

* patch updates
  > `1.0`

  > `1.0.x`
  
  > `~1.0.4`

* minor release (new features)
  > `1`

  > `1.x`
  
  > `^1.0.4`

* major release (breaking changes)

  > `x`
  
  > `*`
