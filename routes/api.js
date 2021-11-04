import { Router } from 'express'
import * as apiCtrl from "../controllers/api.js"

const router = Router()

// localhost:3000/api/ingredients - GET
router.get("/ingredients", apiCtrl.ingredientIndex)

// localhost:3000/api/ingredients - POST
router.post("/ingredients", apiCtrl.createIngredient)

// localhost:3000/api/ingredients/:id - DELETE
router.delete("/ingredients/:id", apiCtrl.deleteIngredient)

export {
  router
}
