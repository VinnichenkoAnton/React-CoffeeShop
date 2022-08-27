import Header from '../header/Header';
import AboutUs from '../aboutUs/AboutUs';
import OurBest from '../ourBest/OurBest';
import Footer from '../footer/Footer';

const MainPage = () => {
  return (
    <>
      <Header screen="mainscreen" title="Everything You Love About Coffee" />
      <AboutUs />
      <OurBest />
      <Footer />
    </>
  );
};

export default MainPage;
