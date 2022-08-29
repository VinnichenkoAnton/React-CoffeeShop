import Header from '../header/Header';
import Product from '../product/Product';
import ProductsList from '../productsList/ProductsList';
import Footer from '../footer/Footer';

import { productsArr } from '../../mocks/productsArr';
import aboutOurGoodsImg from '../../resources/aboutOurGoods.jpg';

const YourPleasurePage = () => {
  return (
    <>
      <Header screen="third" title="For your pleasure" />
      <Product
        img={aboutOurGoodsImg}
        imgwidth="narrow"
        title="About our goods"
        generalInfo={
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br />
            <br />
            Afraid at highly months do things on at. Situation recommend objection do intention
            <br />
            so questions.
            <br /> As greatly removed calling pleased improve an. Last ask him cold feel
            <br />
            met spot shy want. Children me laughing we prospect answered followed. At it went
            <br />
            is song that held help face.
          </p>
        }
      />
      <ProductsList filteredProductsList={productsArr} />
      <Footer />
    </>
  );
};

export default YourPleasurePage;
