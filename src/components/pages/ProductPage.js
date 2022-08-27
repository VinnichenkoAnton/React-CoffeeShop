import Header from '../header/Header';
import Product from '../product/Product';
import Footer from '../footer/Footer';

import aboutOurBeansImg from '../../resources/aboutOurBeans.jpg';

const ProductPage = () => {
  return (
    <>
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
};
export default ProductPage;
