#!/bin/bash

# Enable laravel api, mysql and nginx server
cd Laravel/laradock
docker-compose up -d nginx mysql phpmyadmin

# Enable nextJs
cd /home/vagrant/Album_Web/NextJS/nextjs
docker-compose up