import './HomeView.css'
import '../../components/footer/Footer'
import foodPic from '../../shared/images/foodPic.jpeg'



export const HomeView = () => {

	return (
		<div className="content-wrapper">
			<img src={foodPic} alt={'..error'} />
			<div className="text-wrapper">
			<h3> 
			Welcome to FunFood !! <br/> <br/> Dear User, kindly visit our 'Recipes Page' to have a look at some of the best recipes from across the world.
			<br/> <br/>Please contact us with your valuable feedback to help us improve.
			</h3>
			</div>
					
		</div>
	)
}

export default HomeView
