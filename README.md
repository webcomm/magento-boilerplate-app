# Magento Boilerplate App

A sample application that utilises the Magento Boilerplate project.

## Magento Boilerplate

The Magento Boilerplate project was started in 2012, as a proprietary project to satisfy the development needs of [Webcomm](http://webcomm.io).

In 2013, the project was rewritten into `version 2.0` using Bootstrap 3 and subsequently [open sourced](http://www.webcomm.com.au/blog/2013/09/introducing-magento-boilerplate-a-twitter-bootstrap-3-powered-html5-mobile-first-starter-theme) in an attempt to gain interest and give back to the community.

Since then, the popularity of the project has grown up and above what we originally anticipated. Naturally, tools and practices have changed in the 21 months since `version 2.0`.

Magento Boilerplate `version 3.0` is rewritten entirely from the ground up, based on the [Foundation](http://foundation.zurb.com) CSS framework by [Zurb](http://zurb.com).

So, what's improved in this version? A lot, it turns out:

1. Foundation makes much better use of **mixins**, both through architectural decisions and language advantages mean it's much more pleasant to develop in.
2. Due to the switch to Foundation, much **more concise CSS** is generated, meaning a near three-fold decrease in the filesize of the CSS file.
3. Another rollon effect of switching to Foundation meant that it **wasn't necessary to override Magento's PHTML files**. In fact, the only file we override is `page/html/topmenu.phtml`! The rest of the setup is pure CSS. This dramatically helps with both upgrading Magento and compatibility with third party extensions.
4. A small module was written to **remove redundant Magento JavaScript and stylesheets**, as well as injecting a **single, custom JavaScript file** (at the end of the `body` tag) and a **single, custom stylesheet file** in the `head` tag. No more stylesheet-overload and performance hit.
5. **No more hideous copying of files** to preserve inheritence and compatibility with new versions. We use the following dependency management tools to pull in Magento Boilerplate:
   1. **[Composer](http://getcomposer.org)** is used to install custom modules and patch Magento's files to integrate with future Composer packages.
   2. **[Bower](http://bower.io)** is used to install Magento Boilerplate's assets.
   3. **[Gulp](http://gulpjs.com)** is used as a taskrunner to compile Magnto Boilerplate's assets in conjunction with custom assets and manage live reloading during development.

## Upgrading from `version 2.0`

There is no upgrade path between `version 2.0` and `version 3.0`. This is simply because the architecture of both of these systems is so dramatically different.

## Installation

Simply fork or [download](https://github.com/webcomm/magento-boilerplate-app/archive/master.zip) the Magento Boilerplate App.

You may need to modify two files in the root of your Magento Boilerplate App:

1. `config.json` is the file that instructs Gulp on how to compile assets and manage live reloading. You can modify the server that you will use for development and also choose a random port number.
2. `composer.json` declares the version of Magento version to be installed by Composer. By default, this is `1.9.0.1`, however the [Magento Core Composer Installer](https://github.com/AydinHassan/magento-core-composer-installer) (that the Magento Boilerplate App uses) supports:
   1. `1.7.0.2`
   2. `1.8.1.0`
   3. `1.9.0.0`
   4. `1.9.0.1`
   5. `1.9.1.0`

Navigate to the root folder of your Magento Boilerplate App installation and run the following commands:

1. `composer install`
2. `npm install`
3. `bower install`

You'll now have your dependencies installed!

> Any issues not directly related to the Magento Boilerplate during these processes (such as NodeJS/Gulp/Bower/Magento Core Composer Installer) should be reported to the appropriate projects.

Assuming you've configured a virtual host on your development machine and updated `config.json` accordingly, simply run `gulp && gulp watch`.

Once Magento Boilerplate has compiled all of your assets, it'll start a live-reloading web server at which point you may proceed with the installation process of Magento.

## FAQ

1. I've activated my package/theme, however I'm seeing blank pages? You may need to [enable symlinks](https://github.com/colinmollenhour/modman/issues/31) in your admin panel.