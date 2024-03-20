require('dotenv').config()
require('./db')

const app = require('./server')

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`)
})