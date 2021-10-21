import { useHistory } from 'react-router-dom'
import FoodLogoContactPage from '../../shared/images/FoodLogoContactPage.jpg'
import './ContactView.css'

export const ContactView = () => {

    const history = useHistory()
    return (
        <div>
            <h2>Kontakta Oss</h2>

            <div class="div1">
                <img class = "img1" src={FoodLogoContactPage} alt={'..error'}/>                    
            </div>

            <h4>För konsumenter</h4>

            <h5>FunFood Forum hjälper dig genom att svara på frågor <br/>
                kring Arlas produkter och kampanjer. </h5>
            
            <h4>Ring 0733** </h4>
            <h4> Maila: funfood93@gmail.com </h4>

            <h5>Våra telefontider är Måndag - Fredag  <br/>
            klockan 13:00-16:00. <br/>
            För övrig kontakt går det bra att ringa FunFoods växel på 08-*** 50 **.</h5>

            <h4>Företagskund</h4>

            <h5>Är du företagskund eller vill du ansöka om att bli kund? <br/>
            Besök FunFoods kundportal eller kontakta FunFood Kundcenter på telefon 077-577 11 77.</h5>
            
        </div>

    )
}

export default ContactView