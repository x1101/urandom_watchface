var rocky = require('rocky');
//rocky.export_global_c_symbols();

rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;

  // Clear the screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;

  // Current date/time
  var d = new Date();

  // Set the text color
  ctx.fillStyle = 'white';

  // Center align the text
  ctx.textAlign = 'center';

  // Display the time, in the middle of the screen
  //ctx.fillText('x1101', w/2, h/3);
  //ctx.fillText(d.toLocaleTimeString('en-US', {minute: '2-digit', hour12: false}), w / 2, h / 2, w);
  var DateString = d.toLocalTimeString('en-US', { minute: 'numeric', hour12: false});
  console.log("Time is: " + DateString);
  ctx.fillText(d.toLocaleTimeString(), w / 2, h / 2, w);
  
});

rocky.on('minutechange', function(event) {
  // Display a message in the system logs
  console.log("Another minute with your Pebble!");

  // Request the screen to be redrawn on next pass
  rocky.requestDraw();
});