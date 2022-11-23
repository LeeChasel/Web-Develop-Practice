# Web Develop Practice
This is a practice project to develop web using [Next.js](https://github.com/vercel/next.js) as frontend and [Laravel](https://github.com/laravel/laravel) as backend.

## Port Setting
- Laravel : http://localhost:80
- Next.js : http://localhost:64550
- phpMyadmin : http://localhost:8081

# Installation
```
git clone --recursive https://github.com/LeeChasel/Album_web.git
```

## Set environment
cp /Laravel/laradock/.env.example /Laravel/laradock/.env

change 'APP_CODE_PATH_HOST=../' to 'APP_CODE_PATH_HOST=../Laravel'

cp -r nginx/sites/laravel.conf.example nginx/sites/laravel.test.conf

in laravel.test.conf, edit `root /var/www/laravel/public` to `root /var/www/public`

copy Album_web/.env.example to .env

## install npm and composer
docker-compose up -d workspace

docker-compose exec workspace bash

### in workspace container
npm install

composer install

## Run services
```
cd /home/vagrant/Album_web && sh startServices.sh
```

### When you want to create files using php artisan make:[option] [name]

sudo docker run -it --rm -v /home/vagrant/Album_web/Laravel/Laravel:/var/www -v /etc/passwd:/etc/passwd -u $(id -u ${USER}):$(id -g ${USER})  laradock_workspace bash