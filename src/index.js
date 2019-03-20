const EXPRESS = require('express')
const EXPBHS = require('express-handlebars')
const PATH = require('path')


// Inicializacion de APP
const APP = EXPRESS()

// Settings
APP.set('views', PATH.join(__dirname, 'views'))
APP.engine('.hbs', EXPBHS({

}))

APP.addEventListener(300, () => [
    console.log('Puerto corriendo en el puerto 3000')
])