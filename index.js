const express=require("express")
const app=express()
app.use(express.json())
const cors=require("cors")
app.use(cors())
const port =process.env.PORT || 4000

app.get("/",(req,res)=>{
    res.stattus(200).json("hello")
})

const AWS = require('aws-sdk');

// Set the region and credentials
AWS.config.update({
  accessKeyId: '<your-access-key-id>',
  secretAccessKey: '<your-secret-access-key>',
  region: '<your-region>'
});

// Create an AWS IoT client
const iot = new AWS.Iot({
  endpoint: ''
});

iot.subscribe({
    topic: '<your-mqtt-topic>'
  }, (err, data) => {
    if (err) {
      console.error('Failed to subscribe to topic:', err);
    } else {
      console.log('Subscribed to topic:', data);
    }
  });
  
  // Listen for incoming messages
  iot.on('message', (topic, message) => {
    console.log(`Received message on topic ${topic}: ${message}`);
  });

app.listen(port,()=>{
    console.log("server started")
})