import cors from 'cors'
import Express from 'express'
const app = Express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(Express.json({limit:"16kb"}))
app.use(Express.urlencoded({extended:true,limit:"16kb"}))
import recipeRouter from './Routes/Recipe.routes.js'
app.use('/api/v1/recipes',recipeRouter)

export default app;
