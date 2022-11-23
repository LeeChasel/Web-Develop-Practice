# Web Develop Practice
This is a practice project to develop web using [Next.js](https://github.com/vercel/next.js) as frontend and [Laravel](https://github.com/laravel/laravel) as backend.

## Port Setting
- Laravel : http://localhost:80
- Next.js : http://localhost:64550
- phpMyadmin : http://localhost:8081

## Enter Page
[HomePage](http://localhost:64550/homePage)

# How To Use
## Installation
```
git clone --recursive https://github.com/LeeChasel/Album_web.git
```

## Setting environment
```
sh afterClone.sh
```

# Run Services
```
sh startServices.sh
```

# Notes

## When you want to use `php artisan make` commands to create new files

Run docker as user vagrant
```
sudo docker run -it --rm -v /Laravel/Laravel:/var/www -v /etc/passwd:/etc/passwd -u $(id -u ${USER}):$(id -g ${USER})  laradock_workspace bash
```