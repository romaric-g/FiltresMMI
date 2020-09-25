(function() {

    var width = 400;
    var height = 0;
  
    var streaming = false;
  
    var canvas = null;
  
    function startup() {
      canvas = document.getElementById('myChart');
  
      navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then(function(stream) {
        video.srcObject = stream;
        video.play();
      })
      .catch(function(err) {
        console.log("An error occurred: " + err);
      });
  
      video.addEventListener('canplay', function(ev){
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth/width);

          if (isNaN(height)) {
            height = width / (4/3);
          }
          canvas.setAttribute('width', width);
          canvas.setAttribute('height', height);
          streaming = true;
        }
      }, false);
      
      clear();
    }

    function buildChart(values) {
        clear()
        var context = canvas.getContext('2d');
        if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);
            
            var data = canvas.toDataURL('image/png');
            photo.setAttribute('src', data);
            updateFilters()
        } else {
            clear();
        }
    }
  
    function clear() {
      var context = canvas.getContext('2d');
      context.fillStyle = "#AAA";
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    

    window.addEventListener('load', startup, false);
  })();
  