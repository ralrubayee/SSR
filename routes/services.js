import { Router } from 'express'
import * as servicesCtrl from "../controllers/services.js"
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

// localhost:3000/services - GET
router.get("/", servicesCtrl.index)
// localhost:3000/services/:id - GET
router.get("/:id", servicesCtrl.show)
// localhost:3000/services/:id/edit
router.get("/:id/edit", servicesCtrl.edit)
// localhost:3000/services/:id/review
router.get("/:id/reviews", servicesCtrl.edit)

// localhost:3000/services - POST
router.post("/", isLoggedIn, servicesCtrl.create)



// localhost:3000/services/:id - PUT
router.put("/:id", isLoggedIn, servicesCtrl.update)

// localhost:3000/services/:id - DELETE
router.delete("/:id", isLoggedIn, servicesCtrl.delete)

export {
  router
}