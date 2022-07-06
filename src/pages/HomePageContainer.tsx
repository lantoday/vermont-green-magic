import { HomePageComponent } from './HomePage/HomePageComponent';
import { FooterComponent } from '../shared/Footer/FooterComponent';

function HomePageContainer() {
    return (
        <>
            <div>
                <HomePageComponent />
                <FooterComponent />
            </div>
        </>
    );
}

export default HomePageContainer;
