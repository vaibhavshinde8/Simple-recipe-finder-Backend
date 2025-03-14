import { Router } from "express";
const router = Router();
import { getAllRecipes,searchRecipeByName,searchRecipeByIngredients } from "../controller/recipe.controller.js";
router.get("/",getAllRecipes);
router.post("/searchByName",searchRecipeByName);
router.post("/searchByIngredients",searchRecipeByIngredients);
export default router;