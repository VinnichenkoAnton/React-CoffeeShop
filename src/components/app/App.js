import Mainscreen from '../mainScreen/Mainscreen';
import AboutUs from '../aboutUs/AboutUs';
import OurBest from '../ourBest/OurBest';
import Footer from '../footer/Footer';
import DescrCard from '../descrCard/DescrCard';
import Filters from '../filters/Filters';
import ProductsList from '../productsList/ProductsList';

import aboutOurBeansImg from '../../resources/aboutOurBeans.jpg';

function App() {
  return (
    <>
      {/* <Mainscreen screen = 'first' title='Everything You Love About Coffee'/>
      <AboutUs/>
      <OurBest/>
      <Footer/>  */}
      <Mainscreen screen="second" title="Our Coffee" />
      <DescrCard
        img={aboutOurBeansImg}
        title="About our beans"
        descr={
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br></br>
            <br></br>
            Afraid at highly months do things on at. Situation recommend objection do intention
            <br></br>
            so questions.<br></br> As greatly removed calling pleased improve an. Last ask him cold
            feel<br></br>
            met spot shy want. Children me laughing we prospect answered followed. At it went
            <br></br>
            is song that held help face.
          </p>
        }
      />
      <Filters />
      <ProductsList />
      <Footer />
    </>
  );
}

export default App;
