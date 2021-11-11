import './ContactView.css'
import contactmail from '../../shared/images/contactmail.jpg'
import contactphone from '../../shared/images/contactphone.jpg'
import contactcompany from '../../shared/images/contactcompany.jpg'

export const ContactView = () => {

    return (
        <div>
            <br /><br />
            <h4 className="under_rubrik1">För konsumenter</h4>
            <img className="img" src={contactmail} alt={'..error'} />
            <h4 className="mail"> Mail: funfood93@gmail.com </h4>
            <h6>FunFood Forum hjälper dig genom att svara på frågor <br />
                kring FunFoods produkter och kampanjer. </h6>
            <img className="img" src={contactphone} alt={'..error'} />
            <h4 className="phone">Telefon 0733** </h4>
            <h5>Våra telefontider är Måndag - Fredag  <br />
                klockan 13:00-16:00. <br />
                För övrig kontakt går det bra att ringa FunFoods växel på 08-*** 50 **.</h5>
            <img className="img" src={contactcompany} alt={'..error'} />
            <h4 className="under_rubrik">Företagskund</h4>
            <h5>Är du företagskund eller vill du ansöka om att bli kund? <br /><br />
                Besök FunFoods kundportal eller kontakta FunFood Kundcenter på telefon 077-577 11 77.</h5>
            <br /><br />
        </div>
    )
}
export default ContactView