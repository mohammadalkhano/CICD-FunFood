import './HomeView.css'
import '../../components/footer/Footer'
import { useHistory } from 'react-router'
import RoutingPath from '../../routes/RoutingPath'



export const HomeView = () => {

	const hestory = useHistory();
	return (
		<div className="container">

			<div className="row">
				<div className="col">
					<h1>Welcome to FunFood !</h1>
					<p className="home-p">Dear User, kindly visit our Recipes Page to have a look at some of the best recipes from across the world. Please contact us with your valuable feedback to help us improve.</p>
						<button className="home-button gallery-button " onClick={() => hestory.push(RoutingPath.recipeView)}>Search recipes</button>
						<button className="home-button search-button" onClick={() => hestory.push(RoutingPath.galleryView)}>Gallery</button>
				</div>
				<div className="col">
					<div className="card card1">
						
					</div>
					<div className="card card2">
					</div>
					<div className="card card3">
					<h5>Bread</h5>
						
					</div>
					<div className="card card4">
					<h5>Pasta</h5>
						
					</div>
					<div className="card card5">
						
					</div>
					<div className="card card6">
						
					</div>
				</div>
			</div>
		</div>

	)
}

export default HomeView
