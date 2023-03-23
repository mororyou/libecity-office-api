import express, { Application } from 'express'
import userController from './controllers/v1/user'

const app: Application = express()

// Users
app.use('/api/v1', userController)

export default app
