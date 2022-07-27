# Album_Web

This is a website let you browse your images and videos in local machine folders.

## Port
`laravel home page : http://localhost:80`

`phpmyadmin : http://localhost:8081`

## How to clone
`git clone --recursive https://github.com/LeeChasel/Album_web.git`

## After clone
cd laradock/

cp env-example .env

cp -r nginx/sites/laravel.conf.example nginx/sites/laravel.test.conf

in laravel.test.conf, edit `root /var/www/laravel/public` to `root /var/www/public`

copy Album_web/.env.example to .env

## install npm and composer
docker-compose up -d workspace
docker-compose exec workspace bash

### in workspace container
npm install
composer install
