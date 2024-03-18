require('dotenv').config()
require('./database')

const app = require('./server')

app.listen(app.get('port'), () => {
  console.log(`Server is running on http://localhost:${app.get('port')}`)
})