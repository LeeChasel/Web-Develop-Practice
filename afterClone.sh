#!/bin/bash

# Increase system limit for number of file watchers by running commands in docker host
# source : https://github.com/coder/code-server/issues/628
if [ `grep -c fs.inotify.max_user_watches=524288 /etc/sysctl.conf` -eq '0' ]
then
    echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
    sudo sysctl -p
    echo "After setting, fs.inotify.max_user_watches now is `sysctl -n fs.inotify.max_user_watches`"
else
    echo "fs.inotify.max_user_watches is already 524288(maximum value)"
fi

# Setting Laravel Environment
sed 's/APP_CODE_PATH_HOST=..\//APP_CODE_PATH_HOST=..\/Laravel/g' Laravel/laradock/.env.example > Laravel/laradock/.env
sed 's/\/laravel//g' Laravel/laradock/nginx/sites/laravel.conf.example > Laravel/laradock/nginx/sites/laravel.conf
sed -e 's/DB_HOST=127.0.0.1/DB_HOST=mysql/g' -e 's/DB_DATABASE=laravel/DB_DATABASE=userinfos' -e 's/DB_PASSWORD=/DB_PASSWORD=root' -e 's/WORKSPACE_TIMEZONE=UTC/WORKSPACE_TIMEZONE=Asia\/Taipei/g' Laravel/Laravel/.env.example > Laravel/Laravel/.env
sed -i 's/UTC/Asia\/Taipei/g' Laravel/Laravel/config/app.php

# Install npm and composer
cd Laravel/laradock && docker-compose up -d workspace
docker-compose exec workspace npm install
docker-compose exec workspace composer install