#!/bin/bash

# create and set npm's global modules directory
mkdir ~/npm-global
npm config set prefix '~/npm-global'

# include npm's global modules directory in path
echo 'export PATH=~/npm-global/bin:$PATH' >> ~/.profile
source ~/.profile
