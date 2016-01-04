# package.json cheatsheet

* required fields
  > `name`, `version`

* info fields
  > `description`, `keywords`, `homepage`, `license`

  > `bugs` (`email`, `url`)

  > `authors` & `contributors` (`name`, `email`, `url`)

  > `repository`

* main module returned when your package is required
  > `main` <module-id>

* [package scripts](cli-cheatsheet.md)

* config params for package scripts
  > `config` (\<name>: \<value>) 

* dependencies
  > `dependencies` & `devDependencies` (\<package>: [\<version>](semver-cheatsheet.md))

  > `peerDependencies` (plugins to be installed with your package, but not required by code)

  > `engines` (node or npm versions required)

  > `os` & `cpu`
