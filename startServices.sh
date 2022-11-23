#!/bin/bash

# Enable laravel api, mysql and nginx server
cd Laravel/laradock && docker-compose up -d nginx mysql phpmyadmin

# Enable nextJs
cd ../../NextJS/nextjs && docker-compose up