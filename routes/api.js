import { Router } from 'express'
import * as apiCtrl from "../controllers/api.js"

const router = Router()

// localhost:3000/api/ingredients - POST
router.post("/ingredients", apiCtrl.createIngredient)

export {
  router
}
