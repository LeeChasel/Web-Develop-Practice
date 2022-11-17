#!/bin/bash

# apt update
# apt upgrade

# Increase system limit for number of file watchers by running commands in docker host
# source : https://github.com/coder/code-server/issues/628
# echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
# sudo sysctl -p


# install npm packages
cd /home/nextJs
# put 'npm install' in afterClone situation'
# npm install -D @tailwindcss/forms
# npm install @headlessui/tailwindcss


# run the server
npm run dev