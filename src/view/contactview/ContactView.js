import { useHistory } from 'react-router-dom'
import './ContactView.css'
import contactmail from '../../shared/images/contactmail.jpg'
import contactphone from '../../shared/images/contactphone.jpg'
import contactcompany from '../../shared/images/contactcompany.jpg'


export const ContactView = () => {

    const history = useHistory()
    return (
        <div>

            <h4 class="under_rubrik">För konsumenter</h4>

            <img class = "img" src={contactmail} alt={'..error'}/>

            <h4> Mail: funfood93@gmail.com </h4>

            <h5>FunFood Forum hjälper dig genom att svara på frågor <br/>
                kring FunFoods produkter och kampanjer. </h5>
            
            <img class = "img" src={contactphone} alt={'..error'}/>

            <h4>Telefon 0733** </h4>

            <h5>Våra telefontider är Måndag - Fredag  <br/>
            klockan 13:00-16:00. <br/>
            För övrig kontakt går det bra att ringa FunFoods växel på 08-*** 50 **.</h5>

            <img class = "img" src={contactcompany} alt={'..error'}/>

            <h4 class="under_rubrik">Företagskund</h4>

            <h5>Är du företagskund eller vill du ansöka om att bli kund? <br/><br/>
            Besök FunFoods kundportal eller kontakta FunFood Kundcenter på telefon 077-577 11 77.</h5>
            
        </div>

    )
}

export default ContactView