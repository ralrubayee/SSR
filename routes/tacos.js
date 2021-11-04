import { Router } from 'express'
import * as tacosCtrl from "../controllers/tacos.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/tacos - GET
router.get("/", tacosCtrl.index)

// localhost:3000/tacos - POST
router.post("/", isLoggedIn, tacosCtrl.create)

export {
  router
}