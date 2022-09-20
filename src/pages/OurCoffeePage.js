import { Helmet } from 'react-helmet';

import Header from '../components/header/Header';
import AboutOurProduct from '../components/aboutOurProduct/AboutOurProduct';
import FilteredList from '../components/filteredList/FilteredList';
import Footer from '../components/footer/Footer';

import aboutOurBeansImg from '../resources/aboutOurBeans.jpg';

const OurCoffeePage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Here you can choose your favourite flavour and find more information about it"
        />
        <title>Our coffee</title>
      </Helmet>
      <Header screen="second" title="Our Coffee" />
      <AboutOurProduct
        img={aboutOurBeansImg}
        imgwidth="narrow"
        title="About our beans"
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
      <FilteredList />
      <Footer />
    </>
  );
};
export default OurCoffeePage;
