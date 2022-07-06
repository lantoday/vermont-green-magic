import { CbdPageComponent } from './CbdPage/CbdPageComponent';
import { FooterComponent } from '../shared/Footer/FooterComponent';

function CbdPageContainer() {
    return (
        <>
            <div>
                <CbdPageComponent />
                <FooterComponent />
            </div>
        </>
    );
}

export default CbdPageContainer;
