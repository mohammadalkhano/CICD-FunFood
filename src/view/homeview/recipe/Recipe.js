export const Recipe = ({ title, image, ingredients, url }) => {
    return (
        <div>
            <h5> {title} (click the image to get instructions)</h5>
            <img onClick={(e) => {
                e.preventDefault();
                window.location.href = url;
            }} src={image} alt="" />
            <ol>{ingredients.map(ingredient => (
                <ol>{ingredient.text} </ol>
            ))} </ol>

        </div>
    )
}

export default Recipe