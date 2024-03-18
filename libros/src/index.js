require('dotenv').config()
require('./database')

const app = require('./srever')

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`)
})