import { Helmet } from 'react-helmet';

import Header from '../header/Header';
import AboutUs from '../aboutUs/AboutUs';
import OurBest from '../ourBest/OurBest';
import Footer from '../footer/Footer';

const MainPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="A main page of the tiny coffee shop for those who like and dont imagine thir life without a cup of cappuccino or espresso"
        />
        <title>Coffee shop</title>
      </Helmet>
      <Header screen="mainscreen" title="Everything You Love About Coffee" />
      <AboutUs />
      <OurBest />
      <Footer />
    </>
  );
};

export default MainPage;
