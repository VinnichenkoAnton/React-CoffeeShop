import Header from './components/header/Header';
import AboutUs from './components/aboutUs/AboutUs';
import OurBest from './components/ourBest/OurBest';
import Footer from './components/footer/Footer';
import Product from './components/product/Product';
import FilteredList from './components/filteredList/FilteredList';

import aboutOurBeansImg from './resources/aboutOurBeans.jpg';

function App() {
  return (
    <>
      <Header screen="mainscreen" title="Everything You Love About Coffee" />
      <AboutUs />
      <OurBest />
      <Footer />

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

      <Header screen="second" title="Our Coffee" />
      <Product
        img={aboutOurBeansImg}
        imgwidth="wide"
        title="About it"
        country="Brasil"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        price="16.99$"
      />
      <Footer />
    </>
  );
}

export default App;
