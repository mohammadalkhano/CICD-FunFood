import http from '../RecipeAPI'

const searchRecipe = (recipe) => {
    return http.get(`/recipe/${recipe}`)

}
const getAllRecipe = () => {
    return http.get("search?q=chicken&app_id=c5ce07f1&app_key=89533197cd4fbc563839ff23216c7a93&from=0&to=3&calories=591-722&health=alcohol-free"
    )

}

export default { searchRecipe, getAllRecipe }