[![Build Status](https://travis-ci.org/GeoDoo/ports-and-adapters.svg?branch=master)](https://travis-ci.org/GeoDoo/ports-and-adapters)

### This is a small experiment with Ports and Adapters architecture! 

There are two different "modes" or users of the application. One is, for example a normal user that uses the application on production with real access to an API (production with `axios`) and the other, for example is a test user who uses a static application (locally with static data).

Try running `npm start` and `npm run build:production`. The first will open up the app in port 3000 and the second in port 5000. These ports of course are not the Ports from the architecture :D 