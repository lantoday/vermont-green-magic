import { ContactPageComponent } from './ContactPage/ContactPageComponent';
import { FooterComponent } from '../shared/Footer/FooterComponent';

function ContactPageContainer() {
    return (
        <>
            <div>
                <ContactPageComponent />
                <FooterComponent />
            </div>
        </>
    );
}

export default ContactPageContainer;
