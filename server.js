const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var distDir = __dirname + "/dist";
app.use(express.static(distDir))

app.get('/api/test', (req,res)=>{
    res.status(200).json({result: 'OK'})
})

app.listen(port, ()=>{
    console.log(`App is listening on ${port} port`)
})