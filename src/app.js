import express from 'express'
import db from './db'

import GeneratorController from './controllers/GeneratorController'

const app = express()

//Controllers
app.use('/generator', GeneratorController)

export default app
