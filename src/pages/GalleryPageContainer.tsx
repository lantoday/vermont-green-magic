import { GalleryPageComponent } from './GalleryPage/GalleryPageComponent';
import { FooterComponent } from '../shared/Footer/FooterComponent';

function GalleryPageContainer() {
    return (
        <>
            <div>
                <GalleryPageComponent />
                <FooterComponent />
            </div>
        </>
    );
}

export default GalleryPageContainer;
