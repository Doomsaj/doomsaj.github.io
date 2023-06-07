#!/usr/bin/env sh
set -e

#set git user config
git config --global user.email "m.s.e.r1382@gmail.com"
git config --global user.name "doomsaj"

#build app
npm run build

#change directory
cd dist

#init repo
git init
git add -A
git commit -m "new deployment"
git push -f git@github.com:Doomsaj/doomsaj.github.io.git master:gh-pages