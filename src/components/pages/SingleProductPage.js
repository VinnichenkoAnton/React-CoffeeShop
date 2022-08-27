import { useParams } from 'react-router-dom';

import Header from '../header/Header';
import Product from '../product/Product';
import Footer from '../footer/Footer';

import { productsArr } from '../../mocks/productsArr';

const SingleProductPage = () => {
  const { id } = useParams();
  const infoForProduct = productsArr.filter((item) => item.id === id);
  return (
    <>
      <Header screen="second" title="Our Coffee" />
      {infoForProduct.map(({ id, img, name, price, country, description }) => {
        return (
          <Product
            key={id}
            img={img}
            imgwidth="wide"
            title={name}
            country={country}
            description={description}
            price={price}
          />
        );
      })}

      <Footer />
    </>
  );
};
export default SingleProductPage;
