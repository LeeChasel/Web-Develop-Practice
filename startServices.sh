#!/bin/bash

# Enable laravel api, mysql and nginx server
cd /home/vagrant/Album_web/Laravel/laradock && docker-compose up -d nginx mysql phpmyadmin

# Enable nextJs
cd /home/vagrant/Album_web/NextJS/nextjs && docker-compose up