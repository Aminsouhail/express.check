const express=require('express')
const app=express()
const port=7000
app.listen(port,(err)=>err? console.log(err):console.log(`app listing on ${port}`))
const logger = require('./midlwre/logger')
app.use(logger)
app.use(express.static(__dirname+'/public'))