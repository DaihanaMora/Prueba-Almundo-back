const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
// uso el file system que es nativo de node
const fs = require('fs')
//const routes = require('./routes')

function authServer () {
  const PORT = parseInt(process.argv[2])
  const CORS_ORIGIN = '*'
  const corsOptions = {
    origin: CORS_ORIGIN
  }
  const app = express()
  app.use(morgan('tiny'))
  app.use(cors(corsOptions))
  app.use(helmet())
  app.use(bodyParser.json())
  app.get('/api/fetchAllHotels', (req, res) => {
    fs.readFile('data.json', (err, data) => {
      if (err) {
        console.error(e)
        return res.status(500).send(e)
      }
      return res.send(JSON.parse(data))
    })
    // return res.send('Accediste al API :3')
  })
  //routes({ app, models })
  app.listen(PORT, () => {
    console.log(`Wiiiii server corriendo en el puerto ${PORT}`)
  })
}
authServer()
