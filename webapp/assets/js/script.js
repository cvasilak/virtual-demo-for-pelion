const fs = require('fs')

console.log("Loaded script.js");

// These are executed as soon as this file loads, before the HTML body is loaded.

//CHANGE value of FILE to location of file you write to
const file_sensor_value = '../data/sensor_value.out'
const file_device_id = '../data/device.id'
const file_shake = '../data/vib.conf'
fs.writeFile(file_device_id, "Loading", function(){console.log('File contents erased')})

let observer; // To be initialised later.
let payload = ""
var previous_id = "";

function shakeButtonAnimation() {
    //animate button
    
    $("#shakeButtonId").addClass("wobble animated infinite");
    setTimeout(function() {
        $("#shakeButtonId").removeClass("wobble animated infinite");
    }, 5000)
}

var status = "OFF"
function shakeScript() {
    //add your script here after shake triggered
    //alert("shake shake!!")
    if(status == "OFF")
    {
        status = "ON";
    }
    else if(status == "ON")
    {
        status = "OFF";
    }
    fs.writeFile(file_shake,status,function(err){
        if( err ) throw err;
        console.log('Saved!');
    });
}


function securityScript(){
    $(".tick-box").removeClass("invisible")
    $(".tick-box").addClass("visible");
}

function onLoad() {
    // Put the things you want to call when the HTML body loads.
    // This is generally setting-up stuff for later.
    console.log("Loaded HTML body")

    setButtonColor("green")

}

function setButtonColor(color) {
    //change color of buttonColor element in index.html(the button)
    var col = document.getElementById("buttonColor");
    if (color == "red")
        col.style.color = "#FF0000";
    else if (color == "green")
        col.style.color = "#65FF00"
    else if (color == "yellow")
        col.style.color = "#F0FF00"
    else if (color == "blue")
        col.style.color = "#005FFF"
    else if (color == "black")
        col.style.color = "#005FFF"
    else
        console.log("setButtonColor: Unrecognized color")
}

fs.watch(file_sensor_value, (event, filename) => {
    if (filename && event === "change") {
        console.log("File changed")
        fs.readFile(file_sensor_value, 'utf-8', (err, data) => {
                if (err) throw err;

                // Converting Raw Buffer to text 
                // data using tostring function. 
                console.log(data);
                document.getElementById("number").innerHTML = data;
            })
            //document.getElementById("number").innerHTML = data;
    }
});

fs.watch(file_device_id, (event, filename) => {
    if (filename && event === "change") {
        console.log("Device ID File changed")
        fs.readFile(file_device_id, 'utf-8', (err, data) => {
                if (err) throw err;

                // Converting Raw Buffer to text 
                // data using tostring function. 
                console.log(data);
                // get the last 7 chars of the DeviceID
                data = data.substr(data.length - 7)
                document.getElementById("deviceID").innerHTML = data;
            })
            //document.getElementById("number").innerHTML = data;
    }
});


/*
	Notes:

		These things are equivalent:
	    	- document.getElementById("<id>") == $('#<id>')
        	- document.getElementsByClassName("<classname>") == $('.<classname>')

*/
