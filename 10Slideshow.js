var previous = document.getElementById("prev");
var next = document.getElementById("next");
var image = document.getElementById("image");

// store image paths in an array
var imagearray = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/city.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/cloudy.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/green.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/pretty_clouds.jpg"];

var imageindex = 0;
previous.addEventListener('click', function () {
    if (imageindex == 0) {
        imageindex = imagearray.length - 1;
    }
    else {
        imageindex--;
    }
    image.setAttribute("src", imagearray[imageindex])

})
next.addEventListener('click', function () {
    if (imageindex == imagearray.length - 1) {
        imageindex = 0;
    }
    else {
        imageindex++;
    }
    image.setAttribute("src", imagearray[imageindex])

})
//more than once setTimer once
setInterval(function() {
    if (imageindex == 0) {
        imageindex = imagearray.length - 1;
    }
    else {
        imageindex--;
    }
    image.setAttribute("src", imagearray[imageindex])

}, 3000);

