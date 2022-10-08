#!/bin/bash

# apt update
# apt upgrade

# Increase system limit for number of file watchers by running commands in docker host
# source : https://github.com/coder/code-server/issues/628
# echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
# sudo sysctl -p


# install npm packages
cd /home/nextJs
# npm install swr
# npm install --save-dev sass
# npm install react-bootstrap
# npm install react-icons --save
# npm install --save tailwindcss postcss autoprefixer
# npm install @headlessui/react
# npm install @heroicons/react


# run the server
npm run dev

