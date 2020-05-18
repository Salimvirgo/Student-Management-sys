const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

const PORT = 2000 || process.env.PORT

app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)

// app.listen(process.env.PORT || 6000)

app.listen(PORT, (err) => {
    if(err){
        console.log("There was an error running the server")
    }
    else{
        console.log(`Server running on http://localhost:${PORT}`)
    }
    
})