import { NutrientPageComponent } from './NutrientPage/NutrientPageComponent';
import { FooterComponent } from '../shared/Footer/FooterComponent';

function NutrientPageContainer() {
    return (
        <>
            <div>
                <NutrientPageComponent />
                <FooterComponent />
            </div>
        </>
    );
}

export default NutrientPageContainer;
