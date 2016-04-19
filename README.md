# placetrump
A scary placeholder image platform using Donald Trump images.

## Requirements

- Node.js version 5
- [libvips](https://github.com/jcupitt/libvips)

## Usage

Install the dependencies:
```
npm install -g gulp
npm install
bower install
```

Download some Donald Trump images:
```
gulp fetch-images
```

Run!
```
npm start
```

## Image API

Try some of the ways to get your perfect placeholder image:
```
/{width}/{height}
/{width}/{height}/gray
/{width}/{height}/bw
/{width}/{height}/blur
/{width}/{height}/gray/blur
...
```
