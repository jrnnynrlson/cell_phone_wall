$(document).ready(function() {

  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var face = false;
  var detections = [];
  for (var i=0; i<20; i++) {
    detections[i] = 0;
  }

  var tracker = new tracking.ObjectTracker('face');
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);

  tracking.track('#video', tracker, { camera: true });

  tracker.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    event.data.forEach(function(rect) {
      context.strokeStyle = '#a64ceb';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = '11px Helvetica';
      context.fillStyle = "#fff";
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    });

    detections.shift();
    if (event.data.length) detections.push(1);
    else detections.push(0);

    var sum = detections.reduce(function(a, b) { return a + b; });
    var avg = sum / detections.length;
    var key = $('#key').val();

    if (!face && avg === 1) {
      if (key) $.get('https://maker.ifttt.com/trigger/face_detected/with/key/'+key);
      $('#face_not_detected').hide();
      $('#face_detected').fadeIn();
      face = true;
    } else if (face && avg === 0) {
      if (key) $.get('https://maker.ifttt.com/trigger/face_not_detected/with/key/'+key);
      $('#face_detected').hide();
      $('#face_not_detected').fadeIn();
      face = false;
    }
  });

});