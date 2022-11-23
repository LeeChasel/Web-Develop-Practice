#!/bin/bash

sed 's/APP_CODE_PATH_HOST=..\//APP_CODE_PATH_HOST=..\/Laravel/g' Laravel/laradock/.env.example > Laravel/laradock/.env
sed 's/\/laravel//g' Laravel/laradock/nginx/sites/laravel.conf.example > Laravel/laradock/nginx/sites/laravel.conf
sed -e 's/DB_HOST=127.0.0.1/DB_HOST=mysql/g' -e 's/DB_DATABASE=laravel/DB_DATABASE=userinfos' -e 's/DB_PASSWORD=/DB_PASSWORD=root' -e 's/WORKSPACE_TIMEZONE=UTC/WORKSPACE_TIMEZONE=Asia\/Taipei/g' Laravel/Laravel/.env.example > Laravel/Laravel/.env
sed -i 's/UTC/Asia\/Taipei/g' Laravel/Laravel/config/app.php
cd Laravel/laradock && docker-compose up -d nginx mysql phpmyadmin
docker-compose exec workspace npm install
docker-compose exec workspace composer install
cd ../.. && sh startServices.sh
