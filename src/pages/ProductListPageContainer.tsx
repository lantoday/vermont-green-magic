import { ProductListPageComponent } from './ProductListPage/ProductListPageComponent';
import { FooterComponent } from '../shared/Footer/FooterComponent';

function ProductListPageContainer() {
    return (
        <>
            <div>
                <ProductListPageComponent />
                <FooterComponent />
            </div>
        </>
    );
}

export default ProductListPageContainer;
