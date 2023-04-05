# Web Develop Practice
This is a practice project to develop web using [Next.js](https://github.com/vercel/next.js) as frontend and [Laravel](https://github.com/laravel/laravel) as backend. Only can run in docker now.

## Port Setting
- Laravel : http://localhost:80
- Next.js : http://localhost:64550
- phpMyAdmin : http://localhost:8081

## Enter Page
[HomePage](http://localhost:64550/homePage)

# How To Use - Docker Version
## Installation
```
git clone --recursive https://github.com/LeeChasel/Album_web.git
```

## Setting environment
```
sh afterClone.sh
```

Before Run services, you have to do some steps to set database
1. create database **userinfos** manually in phpMyAdmin web page
2. In any terminal, use `docker exec laradock-workspace-1 php artisan migrate` to create table **userinfos** . 

# Run Services
```
sh startServices.sh
```

# Notes

## Use `php artisan make` commands to create new files

Run docker as user vagrant
```
sudo docker run -it --rm -v /Laravel/Laravel:/var/www -v /etc/passwd:/etc/passwd -u $(id -u ${USER}):$(id -g ${USER})  laradock_workspace bash
```

## Database Data Seed
In workspace container, you can use `php artisan db:seed` to create 5 records.

## Running locally ?
Undo
