const express = require('express')
const app = express()

const { config } = require('./config')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req, res) => {
    const { year } = req.body

    const divisibleFour = !(year % 4)
    const divisibleHundred = !(year % 100)
    const divisibleFourHundred = !(year % 400)

    if(divisibleFour && (!divisibleHundred || divisibleFourHundred)){
        res.status(200).json({message: 'Es un año bisiesto'})
    }else{
        res.status(200).json({message: 'No es un año bisiesto'})
    }
})

app.listen(config.port, () => {
    console.log(`Server listen on http://localhost:${config.port}`)
})
