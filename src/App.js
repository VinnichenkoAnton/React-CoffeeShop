import Mainscreen from './components/mainScreen/Mainscreen';
import AboutUs from './components/aboutUs/AboutUs';
import OurBest from './components/ourBest/OurBest';
import Footer from './components/footer/Footer';
import DescrCard from './components/descrCard/DescrCard';
import FilteredList from './components/filteredList/FilteredList';

import aboutOurBeansImg from './resources/aboutOurBeans.jpg';

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
}

export default App;
