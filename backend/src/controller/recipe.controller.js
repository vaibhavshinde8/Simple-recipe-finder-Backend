import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from '../utils/ApiError.js'
import Recipe from "../models/Recipe.model.js";
async function getAllRecipes(req, res) {
    try {
       //get all recipes from db
        const recipes = await Recipe.find()
        return res.status(200).json(new ApiResponse(200, recipes, "All recipes fetched successfully"));
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Internal Server Error"));
    }
}
//search recipe by name
async function searchRecipeByName(req, res) {
    try {
        const { name } = req.body;
        const recipes = await Recipe.find({ name: { $regex: name, $options: 'i' } });
        return res.status(200).json(new ApiResponse(200, recipes, "All recipes fetched successfully"));
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Internal Server Error"));
    }
}
//search recipe by ingredients
async function searchRecipeByIngredients(req, res) {
    try {
        const { ingredients } = req.body;
        const recipes = await Recipe.find({ ingredients: { $all: ingredients.split(',') } });
        return res.status(200).json(new ApiResponse(200, recipes, "All recipes fetched successfully"));
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Internal Server Error"));
    }
}
export { getAllRecipes, searchRecipeByName, searchRecipeByIngredients };