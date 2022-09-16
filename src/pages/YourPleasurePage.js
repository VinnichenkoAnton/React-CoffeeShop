import { Helmet } from 'react-helmet';

import Header from '../header/Header';
import AboutOurProduct from '../aboutOurProduct/AboutOurProduct';
import Footer from '../footer/Footer';

import aboutOurGoodsImg from '../../resources/aboutOurGoods.jpg';

const YourPleasurePage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Everything that you need to know about coffee" />
        <title>For your pleasure</title>
      </Helmet>
      <Header screen="third" title="For your pleasure" />
      <AboutOurProduct
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
      <Footer />
    </>
  );
};

export default YourPleasurePage;
