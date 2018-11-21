const express = require("express");
var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org")
var fs = require('fs');

client.on('connect',()=>{
    client.subscribe('smartcity/sector2/temp')
})
const options =  { encoding: 'utf8', mode: 0o666, flag: 'a+' };
const file = 'log' + "temp_Sect2" + '.txt';
const datetime = '[' + new Date() + '] ';
client.on('message',(topic, messages)=>{ 
    let message = messages.toString();
   // console.log(message);
 
    var text = datetime + message + '\r\n';
    
    fs.appendFile(file, text,options, function (err) {
        if (err) return console.log(err);
        console.log('successfully appended "' + text + '"');
    });


});
    //console.log("looping ...")

    
client.on("error", function(error) {
    console.log("ERROR: ", error);
});

client.on('offline', function() {
    console.log("offline");
});

client.on('reconnect', function() {
    console.log("reconnect");
});



  //  client.end()

