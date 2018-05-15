FROM php:7.1-apache

RUN a2enmod rewrite

RUN apt-get update && apt-get install -y \
    g++ \
    imagemagick \
    libbz2-dev \
    libfreetype6-dev \
    libicu-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libpng12-dev \
    libpq-dev \
    libxml2-dev \
    libzip-dev \
    zlib1g-dev \
    mysql-client \
  && rm -rf /var/lib/apt/lists/*

RUN mkdir /usr/include/freetype2/freetype && ln -s /usr/include/freetype2/freetype.h /usr/include/freetype2/freetype/freetype.h

RUN docker-php-ext-configure gd --with-jpeg-dir --with-freetype-dir --enable-gd-native-ttf \
    && docker-php-ext-configure pdo_mysql --with-pdo-mysql=mysqlnd \
    && docker-php-ext-install -j$(nproc) \
    bz2 \
    gd \
    exif \
    intl \
    json \
    mbstring \
    mcrypt \
    xmlrpc \
    bcmath \
    opcache \
    pdo_mysql \
    mysqli \
    zip


COPY php.ini /usr/local/etc/php/
COPY . /var/www/html/
