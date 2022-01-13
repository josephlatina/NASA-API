$.getJSON("https://api.nasa.gov/planetary/apod?api_key=3uQScKsHwfr0QjIygHMPvKmezxvJeZPfSigAajem", function(data) {

    var img = data.hdurl;

    console.log(img);
})