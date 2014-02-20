*This repository is a mirror of the [component](http://component.io) module [bmcmahen/animate-css](http://github.com/bmcmahen/animate-css). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/bmcmahen-animate-css`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# animate-css

A small helper for applying CSS animations to an element, with a callback for when that animation finishes. If the browser doesn't support animations, the callback is invoked immediately. It works well with [animate.css](https://github.com/daneden/animate.css) animations.

## Installation

    $ component install bmcmahen/animate-css

## API

    var animate = require('bmcmahen-animate-css');
    var el = document.getElementById('animate-me');
    animate(el, 'fadeOutRight', function(element){
      // Element has finished animating
    });


## License

  MIT
