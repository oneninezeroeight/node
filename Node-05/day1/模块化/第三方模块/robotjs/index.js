const ioHook = require('iohook');

ioHook.on('mousemove', event => {
  console.log(event); // { type: 'mousemove', x: 700, y: 400 }
});