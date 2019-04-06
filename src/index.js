const EXPRESS = require('express')
const EXPBHS = require('express-handlebars')
const PATH = require('path')


// Inicializacion de APP
const APP = EXPRESS()

// Settings
APP.set('views', PATH.join(__dirname, '/views'))
APP.engine('.hbs', EXPBHS({
    defaultLayout: 'main',
    layoutsDir: PATH.join(APP.get('views'), 'layouts'),
    partialsDir: PATH.join(APP.get('views'), 'partials'),
    extname: '.hbs'
}))
APP.set('view engine', '.hbs');

// Middleware
APP.use(EXPRESS.urlencoded({ extended: true }))
APP.use(EXPRESS.json())

// Routers
APP.use(require('./routes/index'))

// Carpeta publica
APP.use(EXPRESS.static(PATH.join(__dirname, 'public')))

// Inicio del servidor
APP.listen(3000, () => [
    console.log('Puerto corriendo en el puerto 3000')
])