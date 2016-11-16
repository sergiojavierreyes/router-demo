const express = require ('express')
const app = express()


let pingRouter = require(__dirname +'/routes/ping')
let duckyRouter = require (__dirname + '/routes/ducky')

app.use('/router', pingRouter)
app.use('/animals', duckyRouter)

app.listen(8000,() => {
	console.log('Up and Running at port 8000!')
})







