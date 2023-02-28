import express from 'express'
const Router = express.Router()
import {authUser} from '../controllers/userController.js'


Router.post('/login',authUser)

export default Router