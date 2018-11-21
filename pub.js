const express = require("express");
var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org")
 


    client.on('connect',()=>{
        console.log("server Emitting infos...")
     } );
     setInterval(
        ()=>{

            let data = {
                source : 'senzor_position',
                value: Math.floor((Math.random() * 40) + 1),
                time_stamp : new Date()
            
            }

            client.publish('smartcity/sector1/temp',JSON.stringify(data))
            client.publish('smartcity/sector2/temp',JSON.stringify(data))
            client.publish('smartcity/sector3/temp',JSON.stringify(data))
        
        
        
        
        },2000
        
        
        
        )


     
