import Header from '../header/Header';
import Product from '../product/Product';
import FilteredList from '../filteredList/FilteredList';
import Footer from '../footer/Footer';

import aboutOurBeansImg from '../../resources/aboutOurBeans.jpg';

const OurCoffeePage = () => {
  return (
    <>
      <Header screen="second" title="Our Coffee" />
      <Product
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
