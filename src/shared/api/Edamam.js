import Axios from 'axios'

const URL = "https://api.edamam.com/"

const RecipeAPI = Axios.create({ baseurl: URL })

export default RecipeAPI